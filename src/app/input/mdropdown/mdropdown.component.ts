import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';
import { TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MemberService } from 'src/app/services/member.service';

export interface Member {
  id: number;
  firstName: string;
  lastName: string;
  contactNo: string;
  address: string;
  createOn: string;
}

@Component({
  selector: 'app-mdropdown',
  templateUrl: './mdropdown.component.html',
  styleUrls: ['./mdropdown.component.css']
})
export class MdropdownComponent implements OnInit {

  memberList: Member[];
  filterOptions: Member[];

  filterValue: string;
  isDisabled = true;

  constructor(private dialog: MatDialog, private service: MemberService, private fb: FormBuilder) {
    this.service.getMembers().subscribe(res => {
      this.memberList = res as Member[];
      this.filterOptions = res as Member[];
    })
    this.createForm()
  }


  form;
  createForm() {
    this.form = this.fb.group({
      myControl: new FormControl('', Validators.required),
      id: 0,
    })
  }

  @ViewChild('secondDialog', { static: false }) secondDialog: TemplateRef<any>;
  @ViewChild('confirmDialog', { static: false }) confirmDialog: TemplateRef<any>;
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }
  openConfirmDialogWithoutRef() {
    this.dialog.open(this.confirmDialog);
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  _filter(value: string) {
    this.filterValue = value.toLowerCase();
    this.filterOptions = this.memberList.filter(m => m.firstName.toLocaleLowerCase().includes(this.filterValue));
    if (this.filterOptions.length === 0) { this.isDisabled = false; }
  }

  ngOnInit() { }

  onSearchChange(value) {
    debounceTime(200)
    this._filter(value)
  }

  displayFn(id: number) {
    return id != undefined && id != null ? this.getNameById(id).firstName : '';
  }

  getNameById(id: number) {
    return this.memberList.find(m => m.id == id);
  }

  submit() {
    console.log(this.form)
  }
}