import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';
import { PTableColumn } from '../primeNG/reus-ptable/reus-ptable.component';


const DUMMY_DATA = [
  { id: 1, name: 'bill' },
  { id: 2, name: 'bob' },
  { id: 3, name: 'billy' },
  { id: 4, name: 'ASas' },
  { id: 5, name: 'fdgdsf' },
  { id: 6, name: 'hg' },
  { id: 7, name: 'dsfhgfh' },
  { id: 8, name: 'dfh' },
  { id: 9, name: 'dghd' }
];

const COLUMNS: PTableColumn[] = [
  { property: 'id', header: 'Serial' },
  { property: 'name', header: 'Name' },
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


}
