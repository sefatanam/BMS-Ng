import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { PTableColumn } from '../primeNG/reus-ptable/reus-ptable.component';


const DUMMY_DATA = [
  { id: 1, name: 'bill', contactNo: '12345678912', address: '19 Holy Street/ Halifax' },
  { id: 2, name: 'bob', contactNo: '12345678912', address: '19 Holy Street/ Halifax' },
  { id: 3, name: 'billy', contactNo: '12345678912', address: '19 Holy Street/ Halifax' },
  { id: 4, name: 'ASas', contactNo: '12345678912', address: '19 Holy Street/ Halifax ' },
  { id: 5, name: 'fdgdsf', contactNo: '12345678912', address: '19 Holy Street/ Halifax' },
  { id: 6, name: 'hg', contactNo: '12345678912', address: '19 Holy Street/ Halifax ' },
  { id: 7, name: 'dsfhgfh', contactNo: '12345678912', address: '19 Holy Street/ Halifax' },
  { id: 8, name: 'dfh', contactNo: '12345678912', address: '19 Holy Street/ Halifax ' },
  { id: 9, name: 'dghd', contactNo: '12345678912', address: '19 Holy Street/ Halifax ' },
  { id: 10, name: 'bill', contactNo: '12345678912', address: '19 Holy Street/ Halifax' },
  { id: 11, name: 'bob', contactNo: '12345678912', address: '19 Holy Street/ Halifax' },
  { id: 12, name: 'billy', contactNo: '12345678912', address: '19 Holy Street/ Halifax' },
  { id: 13, name: 'ASas', contactNo: '12345678912', address: '19 Holy Street/ Halifax ' },
  { id: 14, name: 'fdgdsf', contactNo: '12345678912', address: '19 Holy Street/ Halifax' },
  { id: 15, name: 'hg', contactNo: '12345678912', address: '19 Holy Street/ Halifax ' },
  { id: 16, name: 'dsfhgfh', contactNo: '12345678912', address: '19 Holy Street/ Halifax' },
  { id: 17, name: 'dfh', contactNo: '12345678912', address: '19 Holy Street/ Halifax ' },
  { id: 19, name: 'dghd', contactNo: '12345678912', address: '19 Holy Street/ Halifax ' },

];

const COLUMNS: PTableColumn[] = [
  { property: 'id', header: 'Serial' },
  { property: 'name', header: 'Name' },
  { property: 'contactNo', header: 'Phone No' },
  { property: 'address', header: 'Permanent Address' },
];

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers;

  public Columns: PTableColumn[];
  public DataLists: any[];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followes => this.followers = followes)

    this.DataLists = DUMMY_DATA;
    this.Columns = COLUMNS;
  }

  editClick($event) {
    console.log($event);
  }
  deleteClick($event) {
    console.log($event);
  }
  searchClick($event) {
    console.log($event);
  }
}
