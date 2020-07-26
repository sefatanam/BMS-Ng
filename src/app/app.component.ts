import { Component } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  form;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      address: new FormControl(''),
      contactNo: new FormControl('')
    });
  }

  ngOnInit() { }


  submitForm() {
   

    if (this.form.valid) {
      console.log("SUBMIT", this.form.value);

      this.form.reset({firstName:' '});
    } else {
      console.log("Form Not Valid");
    }
  }
}
