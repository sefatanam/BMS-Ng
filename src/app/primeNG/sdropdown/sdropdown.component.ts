import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import { FormBuilder, FormControl } from '@angular/forms';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-sdropdown',
  templateUrl: './sdropdown.component.html',
  styleUrls: ['./sdropdown.component.css']
})
export class SdropdownComponent implements OnInit {
  cars: SelectItem[];
  selectedCar2: string = 'BMW';
  displayBasic: boolean = false;
  form
  constructor(private _fb: FormBuilder) {
    this.cars = [
      { label: 'Audi', value: 1 },
      { label: 'BMW', value: 2 },
      { label: 'Fiat', value: 3 },
      { label: 'Ford', value: 3 },
      { label: 'Honda', value: 4 },
      { label: 'Jaguar', value: 5 },
      { label: 'Mercedes', value: 6 },
      { label: 'Renault', value: 7 },
      { label: 'VW', value: 8 },
      { label: 'Volvo', value: 9 }
    ];
    this.createForm();
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
