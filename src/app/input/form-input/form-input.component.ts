import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() public formLabel: string;
  @Input() public formIcon: string;
  @Input() public formControl: string;
  @Input() public formPlaceholder: string;
  @Input() public formCondition: boolean;
  @Input() public formError: string;
  @Input() public formInputType: string = 'text';


  constructor() { }

  ngOnInit() {
  }

}
