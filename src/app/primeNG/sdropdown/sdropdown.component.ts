import { Component, Input, OnInit, Output, EventEmitter, ContentChild, ElementRef, AfterContentChecked, ViewChild, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormBuilder, FormControl } from '@angular/forms';


interface IDropDown {
  label: string;
  value: number;
}

@Component({
  selector: 'app-sdropdown',
  templateUrl: './sdropdown.component.html',
  styleUrls: ['./sdropdown.component.css',
  ]
})
export class SdropdownComponent {


  // Input
  @Input('datalist') Datalist: SelectItem[];
  //Out
  @Output() GetSelectedId: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('content', { static: true }) content: ElementRef;

  public selectedId: number;
  public isAddButtonShow: boolean = true;

  isDialogvisible: boolean = false;
  constructor() {
  }



  onSelectOut(): void {
    this.GetSelectedId.emit(this.selectedId);
  }

  dialogHandler() {
    this.isDialogvisible = !this.isDialogvisible;
  }

  dialogShowHandler() {
    this.isDialogvisible = !this.isDialogvisible;
  }

  onDropDownChage(obj) {
    console.log(obj)
  }
}
