import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup
} from '@angular/forms';
import { MemberService } from '@services/member.service';
import { Observable, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
export interface Fruit {
  name: string;
}
class Member {

  firstName = ' ';
  lastName = ' ';
  address = ' ';
  contactNo = ' ';
  createOn: Date = null;

}
@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css'],
  providers: [DatePipe] // Add this
})
export class DemoFormComponent implements OnInit {

  @Input('name') name: string;
  public URL = 'https://localhost:5001/api/members';
  formData: Member;
  valid = true;
  data$ = [];
  form;


  Address = 'Address';
  constructor(private _fb: FormBuilder, private _service: MemberService, private datePipe: DatePipe) {
    if (this.name != null && this.name !== '') { this.form.firstName = this.name; }
    this.createForm();
  }

  // createFormGroup(formBuilder: FormBuilder) {

  //   return formBuilder.group({


  //   })
  // }

  skeletonLoader = true;
  loader() {
    setTimeout(() => { this.skeletonLoader = false; }, 2000);
  }
  createForm() {
    this.form = this._fb.group({
      id: 0,
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      address: new FormControl(''),
      contactNo: new FormControl(''),
      createOn: new FormControl(new Date()),
      selectOption: new FormControl('')

    });
  }


  ngOnInit() {
    this.loader();
  }


  submitForm() {

    console.log(this.fruits); return;

    if (this.form.valid) {


      console.log(this.form);

      this._service.postMember(this.form.value).subscribe(obj => console.log('SUBMIT', obj));

      this.form.reset({ firstName: ' ' });
    } else {
      console.log('Form Not Valid');
    }
  }


  async getData() {
    // const response = await fetch(this.URL);
    // const json = await response.json();
    // console.log('GET', json);

    this._service.getMembers();

  }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
