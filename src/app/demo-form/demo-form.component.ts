import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup
} from "@angular/forms";
import { MemberService } from '../services/member.service';
import { Observable, throwError } from 'rxjs';


class Member {

  firstName: string = " ";
  lastName: string = " ";
  address: string = " ";
  contactNo: string = " ";

}
@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  public URL = "https://localhost:5001/api/members";
  formData: Member;
  valid = true;
  data$ = [];
  form;


  constructor(private _fb: FormBuilder, private _service: MemberService) {
    this.createForm();
  }

  createFormGroup(formBuilder: FormBuilder) {

    return formBuilder.group({


    })
  }


  createForm() {
    this.form = this._fb.group({
      id: 0,
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      address: new FormControl(''),
      contactNo: new FormControl(''),

    });
  }
  ngOnInit() {

  }


  submitForm() {


    if (this.form.valid) {

      console.log(this.form)
      // console.log("SUBMIT", this.form.value);

      this._service.postMember(this.form.value).subscribe(obj => console.log("SUBMIT", obj));
      // this._service.getMembers();

      this.form.reset({ firstName: ' ' });
    } else {
      console.log("Form Not Valid");
    }
  }


  async getData() {
    // const response = await fetch(this.URL);
    // const json = await response.json();
    // console.log('GET', json);

    this._service.getMembers();

  }
}
