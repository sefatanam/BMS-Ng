import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormBuilder, FormControl } from '@angular/forms';


interface IDropDown {
  label: string;
  value: number;
}

@Component({
  selector: 'app-sdropdown',
  templateUrl: './sdropdown.component.html',
  styleUrls: ['./sdropdown.component.css']
})
export class SdropdownComponent implements OnInit {


  // Input
  @Input() Datalist: SelectItem[];
  //Out
  @Output() GetSelectedId: EventEmitter<number> = new EventEmitter<number>();

  public selectedId: number;

  cars: SelectItem[];
  selectedCar2: string = 'BMW';
  displayBasic: boolean = false;
  form

  constructor(private _fb: FormBuilder) {
    this.createForm();
  }

  onSelectOut(): void {
    this.GetSelectedId.emit(this.selectedId);
  }


  createForm() {
    this.form = this._fb.group({
      label: new FormControl(''),
      value: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  dialogHandler() {

    if (this.form.valid) {
      const data = this.form.value;
      this.cars[this.cars.length] = { label: data.label, value: data.value };
      this.form.reset();
    }
    this.displayBasic = !this.displayBasic;
  }
  dialogShowHandler() {
    this.displayBasic = !this.displayBasic;
  }
  onDropDownChage(obj) {
    console.log(obj)
  }
}
