import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { createFormPageValidator } from '../form-validator';
@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  form = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    contactNo: [null],
  }, {
    validators: createFormPageValidator
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
   
    this.form.markAllAsTouched();
    if (this.form.valid) {
      // this.router.navigate([RoutePath.shipping]);
      console.log(this.form.value)
      this.onReset()
    }

  }

  onReset() {
    this.form.reset({
      firstName: '',
      lastName: '',
      contactNo: ''
    });
  }

}
