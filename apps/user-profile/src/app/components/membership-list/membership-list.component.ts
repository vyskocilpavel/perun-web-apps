import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Attribute, Group, Vo } from '@perun-web-apps/perun/openapi';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import {
  customDataSourceFilterPredicate,
  customDataSourceSort, downloadData, getDataForExport,
  TABLE_ITEMS_COUNT_OPTIONS, TableWrapperComponent
} from '@perun-web-apps/perun/utils';

export interface Membership {
  entity: Vo | Group;
  expirationAttribute: Attribute;
}

@Component({
  selector: 'perun-web-apps-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.scss']
})
export class MembershipListComponent implements OnChanges, AfterViewInit {

  constructor() {
  }

  private sort: MatSort;

  @ViewChild(MatSort, { static: true }) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSource();
  }

  @ViewChild(TableWrapperComponent, {static: true}) child: TableWrapperComponent;

  @Input()
  members: Membership[] = [];

  @Input()
  searchString = '';

  @Input()
  selection: SelectionModel<Membership> = new SelectionModel<Membership>(false, []);

  @Input()
  displayedColumns: string[] = ['checkbox', 'name', 'description', 'expirationAttribute', 'extend'];

  @Input()
  pageSize = 10;

  @Input()
  filterValue = '';

  @Output()
  extendMembership: EventEmitter<Membership> = new EventEmitter<Membership>();

  dataSource: MatTableDataSource<Membership>;
  pageSizeOptions = TABLE_ITEMS_COUNT_OPTIONS;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.child.paginator;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Membership>(this.members);
    this.setDataSource();
  }

  getDataForColumn(data: Membership, column: string): string{
    switch (column) {
      case 'name':
        return data.entity.name;
      case 'description':
        return 'description' in data.entity ? data.entity.description : '';
      case 'expirationAttribute':
        return data.expirationAttribute && data.expirationAttribute.value ? <string><unknown>data.expirationAttribute.value : 'never';
      default:
        return '';
    }
  }

  exportData(format: string){
    downloadData(getDataForExport(this.dataSource.filteredData, this.displayedColumns, this.getDataForColumn, this), format);
  }

  setDataSource() {
    if (this.dataSource) {
      this.dataSource.filterPredicate = (data: Membership, filter: string) => customDataSourceFilterPredicate(data, filter, this.displayedColumns, this.getDataForColumn, this);
      this.dataSource.sortData = (data: Membership[], sort: MatSort) => customDataSourceSort(data, sort, this.getDataForColumn, this);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.child.paginator;
      this.dataSource.filter = this.filterValue;
    }
  }


  checkboxLabel(row?: Membership): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.entity.id + 1}`;
  }

  extend(membership: Membership) {
    this.extendMembership.emit(membership);
  }
}
