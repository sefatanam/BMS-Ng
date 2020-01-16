import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { CatagoryService } from 'src/app/services/catagory.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-catagory',
  templateUrl: './add-catagory.component.html',
  styleUrls: ['./add-catagory.component.css']
})
export class AddCatagoryComponent implements OnInit {

  constructor(public service: CatagoryService,
    private snackBar: MatSnackBar) { }

  public listItems: Array<string> = [];
  ngOnInit() {
    this.resetFormData();
   
  }


  
  onSubmit(form:NgForm){
    // console.log(form.value);
    this.service.addCatagory(form.value).subscribe((res:string)=>
      
      {
        res='Catagory Added Successfully';
        this.resetFormData(form);
        this.snackBar.open(res.toString(),'',{
          duration:5000,
          verticalPosition:'bottom',
          
        });
        this.service.filter('Register Click'); 
       
      }
      )

  }

  
  resetFormData(form?:NgForm){
    if (form!=null)
      form.resetForm();
    this.service.formData= {
     Id:0,
     Name:'',
     Code:''
    }
  }

}
