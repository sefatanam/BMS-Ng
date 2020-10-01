import { Component, Input, Output, EventEmitter, AfterContentInit, OnInit } from '@angular/core';



export interface PTableColumn {
  property: string;
  header: string;
}

@Component({
  selector: 'app-reus-ptable',
  templateUrl: './reus-ptable.component.html',
  styleUrls: ['./reus-ptable.component.css']
})
export class ReusPtableComponent implements OnInit {

  @Input() DataLists: any[];
  @Input() Columns: PTableColumn[];

  @Output() Edit: EventEmitter<object> = new EventEmitter<object>();
  @Output() Show: EventEmitter<object> = new EventEmitter<object>();
  @Output() Delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() Options: EventEmitter<object> = new EventEmitter<object>();
  @Output() Refresh: EventEmitter<object> = new EventEmitter<object>();
  @Output() Search: EventEmitter<string> = new EventEmitter<string>();

  public filterText = '';
  public loading = true;
  public display = false;
  public viewObject: any = null;
  public scrollableCols: any[];
  public frozenCols: any[];

  public showAll: any = false;

  triggerReadMore() {
    this.showAll = !this.showAll;
  }
  constructor() { }
  ngOnInit(): void {
    this.loading = this.DataLists === null ? true : false;
  }

  onEditOut(rowData: object): void {
    this.Edit.emit(rowData);
  }

  onShowOut(rowData: object): void {
    this.display = true;
    this.viewObject = JSON.parse(JSON.stringify(rowData));
    // In case of use Show Action
    this.Show.emit(rowData);
  }
  onDeleteOut(id: number): void {
    this.Delete.emit(id);
  }
  onOptionsOut(rowData: object): void {
    this.Options.emit(rowData);
  }
  onRefreshOut(): void {
    this.Refresh.emit();
  }
  onFilterOut(): void {
    this.Search.emit(this.filterText);
  }

}
