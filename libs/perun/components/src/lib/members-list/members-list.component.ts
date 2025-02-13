import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import { RichMember } from '@perun-web-apps/perun/openapi';
import {
  customDataSourceFilterPredicate, customDataSourceSort, downloadData, getDataForExport,
  getDefaultDialogConfig,
  parseEmail,
  parseFullName, parseLogins, parseOrganization,
  TABLE_ITEMS_COUNT_OPTIONS
} from '@perun-web-apps/perun/utils';
import { ChangeMemberStatusDialogComponent, MemberTreeViewDialogComponent } from '@perun-web-apps/perun/dialogs';
import { GuiAuthResolver, TableCheckbox } from '@perun-web-apps/perun/services';
import { ActivatedRoute } from '@angular/router';
import { TableWrapperComponent } from '@perun-web-apps/perun/utils';

@Component({
  selector: 'perun-web-apps-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnChanges, AfterViewInit {

  constructor(private dialog: MatDialog,
              private authResolver: GuiAuthResolver,
              private tableCheckbox: TableCheckbox,
              private route: ActivatedRoute) { }

  private sort: MatSort;

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
  }

  @ViewChild(TableWrapperComponent, {static: true}) child: TableWrapperComponent;

  @Input()
  showGroupStatuses: boolean;

  @Input()
  members: RichMember[];

  @Input()
  searchString: string;

  @Input()
  selection: SelectionModel<RichMember> = new SelectionModel<RichMember>();

  @Input()
  displayedColumns: string[] = ['checkbox', 'id', 'type', 'fullName', 'status', 'groupStatus', 'sponsored', 'organization', 'email', 'logins'];

  @Input()
  pageSize = 10;

  @Input()
  disableRouting = false;

  @Input()
  filter = '';

  @Output()
  page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @Output()
  updateTable = new EventEmitter<boolean>();

  dataSource: MatTableDataSource<RichMember>;
  pageSizeOptions = TABLE_ITEMS_COUNT_OPTIONS;
  disabledRouting: boolean;
  groupId: number;

  getSortDataForColumn(data: RichMember, column: string, outerThis: MembersListComponent): string{
    switch (column) {
      case 'id':
        return data.id.toString();
      case 'fullName':
        if(data.user){
          return data.user.lastName ? data.user.lastName : data.user.firstName ?? '';
        }
        return ''
      case 'status':
        return  outerThis.showGroupStatuses ? data.groupStatus : data.status;
      case 'organization':
        return parseOrganization(data);
      case 'email':
        return parseEmail(data);
      default:
        return '';
    }
  }

  getFilterDataForColumn(data: RichMember, column: string): string{
    switch (column) {
      case 'fullName':
        if(data.user){
          return parseFullName(data.user);
        }
        return ''
      case 'email':
        return parseEmail(data);
      case 'logins':
        return parseLogins(data);
      default:
        return '';
    }
  }

  getExportDataForColumn(data: RichMember, column: string, outerThis: MembersListComponent): string{
    switch (column) {
      case 'id':
        return data.id.toString();
      case 'fullName':
        if(data.user){
          return parseFullName(data.user);
        }
        return ''
      case 'status':
        return  outerThis.showGroupStatuses ? data.groupStatus : data.status;
      case 'organization':
        return parseOrganization(data);
      case 'email':
        return parseEmail(data);
      case 'logins':
        return parseLogins(data);
      default:
        return '';
    }
  }

  exportData(format: string){
    downloadData(getDataForExport(this.dataSource.filteredData, this.displayedColumns, this.getExportDataForColumn, this), format);
  }

  setDataSource() {
    if (!this.dataSource) {
      this.dataSource = new MatTableDataSource<RichMember>();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.child.paginator;
      this.dataSource.filterPredicate = (data: RichMember, filter: string) =>
        customDataSourceFilterPredicate(data, filter, this.displayedColumns, this.getFilterDataForColumn, this);
      this.dataSource.sortData = (data: RichMember[], sort: MatSort) =>
        customDataSourceSort(data, sort, this.getSortDataForColumn, this);
    }
    this.dataSource.filter = this.filter;
    this.dataSource.data = this.members;

  }

  ngAfterViewInit(): void {
    if (!this.authResolver.isPerunAdminOrObserver()){
      this.displayedColumns = this.displayedColumns.filter(column => column !== 'id');
    }
  }

  ngOnChanges() {
    this.setDataSource();
    this.disabledRouting = this.disableRouting;
    this.route.parent?.params.subscribe(params => {
      if (params['groupId']){
        this.groupId = params['groupId'];
      }
    })
  }

  canBeSelected = (member: RichMember): boolean => member.membershipType === 'DIRECT'

  isAllSelected() {
    return this.tableCheckbox.isAllSelectedWithDisabledCheckbox(this.selection.selected.length, this.filter, this.pageSize, this.child.paginator.hasNextPage(), this.child.paginator.pageIndex, this.dataSource, this.sort, this.canBeSelected);
  }

  masterToggle() {
    this.tableCheckbox.masterToggle(this.isAllSelected(), this.selection, this.filter, this.dataSource, this.sort, this.pageSize, this.child.paginator.pageIndex, true, this.canBeSelected);
  }

  checkboxLabel(row?: RichMember): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  changeStatus(event: any, member: RichMember) {
    event.stopPropagation();
    if (member.status === 'INVALID') {
      const config = getDefaultDialogConfig();
      config.width = '500px';
      config.data = {member: member};

      const dialogRef = this.dialog.open(ChangeMemberStatusDialogComponent, config);
      dialogRef.afterClosed().subscribe( success => {
        if (success) {
          this.updateTable.emit(true);
        }
      });
    }
  }

  viewMemberGroupTree(member: RichMember) {
    const config = getDefaultDialogConfig();
    config.width = '800px';
    config.data = {member: member, groupId: this.groupId};

    this.dialog.open(MemberTreeViewDialogComponent, config);
  }
}
