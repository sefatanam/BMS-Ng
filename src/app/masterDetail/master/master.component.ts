import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { PurchaseVm } from '../models/PurchaseVm';
import { CustomerVm } from '../models/CustomerVm';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  public $Model: CustomerVm = null;
  masterForm: FormGroup = null;
  valid = true;
  constructor(private fb: FormBuilder) {

    this.createForm();
  }

  ngOnInit() {
  }



  createForm(): void {

    // this.$Model = data == null ? new CustomerVm() : data;

    this.masterForm = this.fb.group({
      id: 0,
      name: new FormControl(''),
      contactNo: new FormControl(''),
      address: new FormControl(''),
      invoiceNo: new FormControl(''),
      // purchaseDetail: this.getDetailsSingleFormArray()
    });
  }


  getDetailsSingleFormArray(): FormArray {

    const formArray = new FormArray([]);

    this.$Model.purchaseDetail.forEach(data => {
      const form = this.fb.group({
        customerId: data.customerId,
        itemId: data.itemId,
        itemName: data.itemName,
        qty: data.qty,
        price: data.price
      });
      formArray.push(form);
    });

    return formArray;
  }


  submitForm() {

  }

}
