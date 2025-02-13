import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GuiAuthResolver, NotificatorService } from '@perun-web-apps/perun/services';
import { TranslateService } from '@ngx-translate/core';
import { Group, GroupsManagerService, Resource, ResourcesManagerService } from '@perun-web-apps/perun/openapi';
import { SelectionModel } from '@angular/cdk/collections';
import {
  TABLE_ASSIGN_GROUP_TO_RESOURCE_DIALOG,
  TableConfigService
} from '@perun-web-apps/config/table-config';
import { PageEvent } from '@angular/material/paginator';

export interface AssignGroupToResourceDialogData {
  theme: string;
  resource: Resource;
}

@Component({
  selector: 'app-perun-web-apps-assign-group-to-resource-dialog',
  templateUrl: './assign-group-to-resource-dialog.component.html',
  styleUrls: ['./assign-group-to-resource-dialog.component.scss']
})
export class AssignGroupToResourceDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AssignGroupToResourceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AssignGroupToResourceDialogData,
              private notificator: NotificatorService,
              private translate: TranslateService,
              private resourceManager: ResourcesManagerService,
              private tableConfigService: TableConfigService,
              private groupService: GroupsManagerService,
              public guiAuthResolver: GuiAuthResolver) {
  }

  loading = false;
  theme: string;

  resource: Resource;
  unAssignedGroups: Group[];
  checkGroups = false;
  async = true;
  selection = new SelectionModel<Group>(true, []);
  filterValue = '';

  tableId = TABLE_ASSIGN_GROUP_TO_RESOURCE_DIALOG;
  pageSize: number;

  ngOnInit() {
    this.loading = true;
    this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
    this.theme = this.data.theme;
    this.resource = this.data.resource;
    this.resourceManager.getAssignedGroups(this.resource.id).subscribe(assignedGroups => {
      this.groupService.getAllGroups(this.resource.voId).subscribe(allGroups => {
        this.unAssignedGroups = allGroups;
        for (const assignedGroup of assignedGroups) {
          for (const allGroup of allGroups) {
            if (assignedGroup.id === allGroup.id) {
              this.unAssignedGroups.splice(this.unAssignedGroups.indexOf(allGroup), 1);
            }
          }
        }
        this.loading = false;
      }, () => this.loading = false);
    }, () => this.loading = false);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onAdd() {
    if (this.checkGroups) {
      //TODO when checkbox is checked
    } else {
      this.loading = true;
      const addedGroups: number[] = [];
      for (const group of this.selection.selected) {
        addedGroups.push(group.id);
      }

      this.resourceManager.assignGroupsToResource(addedGroups, this.resource.id, this.async).subscribe(() => {
        this.translate.get('DIALOGS.ASSIGN_GROUP_TO_RESOURCE.SUCCESS_MESSAGE').subscribe(message => {
          this.notificator.showSuccess(message);
          this.dialogRef.close(true);
        });
      }, () => this.loading = false);
    }
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
  }

  canAddGroups() {
    let canAdd = true;
    this.selection.selected.forEach(group => {
      if(!this.guiAuthResolver.isAuthorized('assignGroupsToResource_List<Group>_Resource_policy',[this.resource, group])){
        canAdd = false;
      }
    })
    return canAdd;
  }
}
