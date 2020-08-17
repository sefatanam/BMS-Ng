import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pdropdpwn',
  templateUrl: './pdropdpwn.component.html',
  styleUrls: ['./pdropdpwn.component.css']
})
export class PdropdpwnComponent implements OnInit {
  @Input('displayBasic') displayBasic: boolean;
  constructor() { }
  ngOnInit() {
  }
  showBasicDialog() {
    this.displayBasic = !this.displayBasic;
  }
}
