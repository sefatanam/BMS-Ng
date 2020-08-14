import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup
} from "@angular/forms";
import { MemberService } from '../services/member.service';
import { Observable, throwError } from 'rxjs';
import { DatePipe } from '@angular/common'

class Member {

  firstName: string = " ";
  lastName: string = " ";
  address: string = " ";
  contactNo: string = " ";
  createOn: Date = null;

}
@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css'],
  providers: [DatePipe] // Add this
})
export class DemoFormComponent implements OnInit {

  public URL = "https://localhost:5001/api/members";
  formData: Member;
  valid = true;
  data$ = [];
  form;


  Address: string = 'Address'
  constructor(private _fb: FormBuilder, private _service: MemberService, private datePipe: DatePipe) {
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
      createOn: new FormControl(new Date())

    });
  }


  ngOnInit() {

  }


  submitForm() {


    if (this.form.valid) {


      console.log(this.form)
      // console.log("SUBMIT", this.form.value);

      //this.form.value['createOn'] = this.datePipe.transform(this.form.value['createOn'], 'dd/MM/yyyy HH:mm:ss');

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
