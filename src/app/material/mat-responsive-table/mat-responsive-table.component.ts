import { Component, OnInit, ViewChild } from '@angular/core';
import { MemberService, Member } from '@services/member.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-mat-responsive-table',
  templateUrl: './mat-responsive-table.component.html',
  styleUrls: ['./mat-responsive-table.component.css']
})
export class MatResponsiveTableComponent implements OnInit {

  members: any;
  displayedColumns = ['id', 'firstName', 'lastName', 'contactNo', 'address', 'createOn'];
  dataSource: MatTableDataSource<any>;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private service: MemberService) {
    // this.service.getMembers().subscribe(res => this.members = res);
    // this.dataSource = this.members;
  }


  ngOnInit() {
    this.service.getMembers().subscribe(res => this.dataSource = res as any);
    // console.log(this.members)
  }


}
