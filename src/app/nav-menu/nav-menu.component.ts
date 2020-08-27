import { Component, OnInit } from '@angular/core';
import { navigtions, options as Conditions } from '../navigation/navigations'
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  public fillerNav = navigtions;
  public options: FormGroup = this.fb.group(Conditions);
  ngOnInit() {
  }

}
