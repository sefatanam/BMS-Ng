import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-catagory',
  templateUrl: './add-catagory.component.html',
  styleUrls: ['./add-catagory.component.css']
})
export class AddCatagoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("ok");
  }

}
