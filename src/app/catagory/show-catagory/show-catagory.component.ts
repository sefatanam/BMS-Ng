import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatSort} from '@angular/material';
import { CatagoryService } from 'src/app/services/catagory.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
// import {AddDepComponent} from 'src/app/department/add-dep/add-dep.component';
import { FormsModule }   from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import { Catagory } from 'src/app/models/catagory-model';
// import { EditDepComponent } from '../edit-dep/edit-dep.component';

@Component({
  selector: 'app-show-catagory',
  templateUrl: './show-catagory.component.html',
  styleUrls: ['./show-catagory.component.css']
})
export class ShowCatagoryComponent implements OnInit {

  constructor(private service : CatagoryService) { }

  listData : MatTableDataSource<any>;
  displayedColumns:string[]=['Options','Id','Name','Code']

  ngOnInit() {
    this.refreshCatList();
  }

  applyFilter(filterValue:string){
    this.listData.filter=filterValue.trim().toLowerCase();
  }


  @ViewChild(MatSort,null) sort : MatSort;
  refreshCatList(){
    this.service.getCatagoryList().subscribe(data=>{
      this.listData= new MatTableDataSource(data);
      this.listData.sort= this.sort;
    })
  
  }

  onEdit(cat:Catagory){
    console.log(cat);
  }
  onDelete(id:number){
    console.log(id);
  }
}
