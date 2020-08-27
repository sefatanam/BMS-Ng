import { Component, OnInit } from '@angular/core';
import { navigtions } from '../navigation/navigations'
import { FormGroup, FormBuilder } from '@angular/forms';

const navigtionsItem = [
  {
    id: '1',
    name: 'Table',
    icon: '',
    url: '/table'
  }, {
    id: '2',
    name: 'Form',
    icon: '',
    url: '/form'
  }
]

interface Menu {
  name: string;
  url: string;
  icon: string;
}
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }



  ngOnInit() {
  }

}
