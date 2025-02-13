import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  Candidate, Member,
  MembersManagerService,
  RichMember,
  UsersManagerService
} from '@perun-web-apps/perun/openapi';
import { NotificatorService, StoreService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup, ValidationErrors,
  Validators
} from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
import { TABLE_VO_MEMBERS, TableConfigService } from '@perun-web-apps/config/table-config';
import { Observable } from 'rxjs';
import { debounceTime, map, switchMap, take} from 'rxjs/operators';
import { CustomValidators, enableFormControl } from '@perun-web-apps/perun/utils';

export interface CreateServiceMemberDialogData {
  voId: number;
}

@Component({
  selector: 'app-create-service-member-dialog',
  templateUrl: './create-service-member-dialog.component.html',
  styleUrls: ['./create-service-member-dialog.component.scss']
})
export class CreateServiceMemberDialogComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  passwordNamespaces: string[] = [];
  loading: boolean;
  firstSearchDone = false;
  searchCtrl = new FormControl('');
  members: RichMember[] = [];
  selection = new SelectionModel<RichMember>(true, []);
  pageSize: number;
  tableId = TABLE_VO_MEMBERS;
  assignedMembers: RichMember[] = [];
  // @ts-ignore
  candidate: Candidate = {};
  successMessageMember = '';
  successMessagePwd = '';
  processing: boolean;

  constructor(private dialogRef: MatDialogRef<CreateServiceMemberDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: CreateServiceMemberDialogData,
              private membersManagerService: MembersManagerService,
              private usersManagerService: UsersManagerService,
              private notificator: NotificatorService,
              private translate: TranslateService,
              private store: StoreService,
              private _formBuilder: FormBuilder,
              private tableConfigService: TableConfigService) {
    translate.get('DIALOGS.CREATE_SERVICE_MEMBER.SUCCESS_MEMBER').subscribe(m => this.successMessageMember = m);
    translate.get('DIALOGS.CREATE_SERVICE_MEMBER.SUCCESS_PWD').subscribe(m => this.successMessagePwd = m);
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      emailCtrl: ['', [Validators.required, Validators.pattern('\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(.\\w{2,3})+')]],
      subjectCtrl: [null],
      issuerCtrl: [null]
    });
    this.secondFormGroup = this._formBuilder.group({
      namespaceCtrl: ['Not selected'],
      loginCtrl: ['', [Validators.pattern('^[a-z][a-z0-9_-]+$'), Validators.maxLength(15), Validators.minLength(2)]],
      passwordCtrl: ['', Validators.compose([
        CustomValidators.patternValidator([/\d/, /[A-Z]/, /[a-z]/, /[$&+,:;=?@#|'<>.^*()%!-]/]),
        Validators.minLength(10)])
      ],
      passwordAgainCtrl: [''],
      generatePasswordCtrl: [true]
    }, {
      validator: CustomValidators.passwordMatchValidator
    });
    this.onNamespaceChanged('Not selected');
    this.passwordNamespaces = ['Not selected'].concat(this.store.get('password_namespace_attributes').map(att => att.split(':')[6].toUpperCase()));
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    const user = this.store.getPerunPrincipal().user;
    this.membersManagerService.getMembersByUser(user.id).subscribe(members => {
      let tempMember: RichMember = <RichMember>{};
      for (const member of members) {
        if(member.voId === this.data.voId){
          tempMember = <RichMember>member;
        }
      }
      tempMember['user'] = user;
      this.assignedMembers.push(tempMember);
    });
  }

  existingLoginValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      let namespace = this.secondFormGroup.get('namespaceCtrl').value.toLowerCase();
      namespace = namespace === 'not selected' ? 'mu' : namespace;
      return control.valueChanges.pipe(
        debounceTime(500),
        take(1),
        switchMap(() =>
          this.usersManagerService.isLoginAvailable(namespace, control.value)
            .pipe(
              map(res => res ? null : { 'loginExists': true })
            )
        )
      );
    };
  }

  onCreate() {
    this.processing = true;
    this.candidate['firstName'] = '';
    this.candidate['lastName'] = this.firstFormGroup.get('nameCtrl').value;
    this.candidate['attributes'] = {};
    this.candidate['attributes']['urn:perun:member:attribute-def:def:mail'] = this.firstFormGroup.get('emailCtrl').value;
    if (this.secondFormGroup.get('namespaceCtrl').value !== 'Not selected') {
      this.candidate['attributes'][`urn:perun:user:attribute-def:def:login-namespace:${this.secondFormGroup.get('namespaceCtrl').value.toLowerCase()}`] = this.secondFormGroup.get('loginCtrl').value;
    }
    const subject = this.firstFormGroup.get('subjectCtrl');
    if (subject && subject.value) {
      // @ts-ignore
      this.candidate['userExtSource'] = {};
      this.candidate['userExtSource']['login'] = subject.value;
      this.candidate['userExtSource']['loa'] = 0;
      // @ts-ignore
      this.candidate['userExtSource']['extSource'] = {};
      this.candidate['userExtSource']['extSource']['name'] = this.firstFormGroup.get('issuerCtrl').value;
      this.candidate['userExtSource']['extSource']['type'] = 'cz.metacentrum.perun.core.impl.ExtSourceX509';
    }

    this.membersManagerService.createSpecificMember({
      vo: this.data.voId,
      specificUserType: 'SERVICE',
      specificUserOwners: this.assignedMembers.map(m => m.user),
      candidate: this.candidate
    }).subscribe(member => {
      this.membersManagerService.validateMemberAsync(member.id).subscribe(mem => {
        this.notificator.showSuccess(this.successMessageMember);
        if (this.secondFormGroup.get('namespaceCtrl').value !== 'Not selected') {
          this.setPassword(mem, this.secondFormGroup.get('generatePasswordCtrl').value);
        } else {
          this.dialogRef.close(true);
          this.processing = false;
        }
      }, () => this.processing = false);
    }, () => this.processing = false);
  }

  setPassword(member: Member, generateRandom: boolean) {
    const login = this.secondFormGroup.get('loginCtrl').value;
    const namespace = this.secondFormGroup.get('namespaceCtrl').value.toLowerCase();
    const password = this.secondFormGroup.get('passwordCtrl').value;
    if (generateRandom) {
      this.usersManagerService.reserveRandomPassword(member.userId, namespace).subscribe(() => {
        this.usersManagerService.validatePasswordForUser(member.userId, namespace).subscribe(() => {
          this.validateMember(member.id);
        }, () => {
          this.processing = false;
          this.dialogRef.close(true);
        });
      }, () => {
        this.processing = false;
        this.dialogRef.close(true);
      });
    } else {
      this.usersManagerService.reservePasswordForLogin(login, namespace, password).subscribe(() => {
        this.usersManagerService.validatePasswordForLogin(login, namespace).subscribe(() => {
         this.validateMember(member.id);
        }, () => {
          this.processing = false;
          this.dialogRef.close(true);
        });
      }, () => {
        this.processing = false;
        this.dialogRef.close(true);
      });
    }
  }

  validateMember(memberId: number){
    this.membersManagerService.validateMemberAsync(memberId).subscribe(() => {
      this.notificator.showSuccess(this.successMessagePwd);
      this.dialogRef.close(true);
      this.processing = false;
    }, () => {
      this.processing = false;
      this.dialogRef.close(true);
    });
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  onSearchByString() {
    this.loading = true;
    this.membersManagerService.findCompleteRichMembersForVo(this.data.voId, [null], this.searchCtrl.value).subscribe(members => {
      this.members = members.filter(m => !m.user.specificUser);
      this.firstSearchDone = true;
      this.loading = false;
    });
  }

  addUsers() {
    const temp = this.assignedMembers.map(m => m.id);
    this.selection.selected.forEach(member => {
      if (!temp.includes(member.id)) {
        this.assignedMembers.push(member);
      }
    });
    this.selection.clear();
  }

  removeUser(member: RichMember) {
    this.assignedMembers = this.assignedMembers.filter(m => m.id !== member.id);
  }

  onNamespaceChanged(namespace: string) {
    const login = this.secondFormGroup.get('loginCtrl');
    const password = this.secondFormGroup.get('passwordCtrl');
    const passwordAgain = this.secondFormGroup.get('passwordAgainCtrl');
    const generatePassword = this.secondFormGroup.get('generatePasswordCtrl');
    if (namespace !== 'Not selected') {
      const loginValidators = [Validators.required, Validators.pattern('^[a-z][a-z0-9_-]+$'), Validators.maxLength(15), Validators.minLength(2)];
      enableFormControl(login, loginValidators, [this.existingLoginValidator()]);
      enableFormControl(generatePassword,[]);
      this.passwordOptionChanged();
    } else {
      login.disable();
      login.setValue('');
      password.disable();
      password.setValue('');
      passwordAgain.disable();
      passwordAgain.setValue('');
      generatePassword.disable();
      if (!generatePassword.dirty){
        generatePassword.setValue(true);
      }
    }
  }

  passwordOptionChanged() {
    const password = this.secondFormGroup.get('passwordCtrl');
    const passwordAgain = this.secondFormGroup.get('passwordAgainCtrl');
    if (this.secondFormGroup.get('generatePasswordCtrl').value){
      password.disable();
      password.setValue('');
      passwordAgain.disable();
      passwordAgain.setValue('');
    } else {
      const passwordValidators = [Validators.required, CustomValidators.patternValidator([/\d/, /[A-Z]/, /[a-z]/, /[$&+,:;=?@#|'<>.^*()%!-]/]),
        Validators.minLength(10)];
      enableFormControl(password, passwordValidators);
      enableFormControl(passwordAgain, []);
    }
  }
}
