import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

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
  constructor() {
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
  }

  ngOnInit() {
  }

}
