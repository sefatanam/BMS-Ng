import { Component, Input, Output, EventEmitter } from '@angular/core';



export interface PTableColumn {
  property: string;
  header: string;
}

@Component({
  selector: 'app-reus-ptable',
  templateUrl: './reus-ptable.component.html',
  styleUrls: ['./reus-ptable.component.css']
})
export class ReusPtableComponent {

  @Input() DataLists: any[];
  @Input() Columns: PTableColumn[];

  @Output() onEdit: EventEmitter<object> = new EventEmitter<object>();
  @Output() onShow: EventEmitter<object> = new EventEmitter<object>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onOptions: EventEmitter<object> = new EventEmitter<object>();

  constructor() {

  }

  onEditOut(rowData: object): void {
    this.onEdit.emit(rowData);

  }
  onShowOut(rowData: object): void {
    this.onShow.emit(rowData);
  }
  onDeleteOut(id: number): void {
    this.onDelete.emit(id);
  }
  onOptionsOut(rowData: object): void {
    this.onOptions.emit(rowData);
  }


}
