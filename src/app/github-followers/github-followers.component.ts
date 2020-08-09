import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers;
  constructor(private service: GithubFollowersService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followes => this.followers = followes)

  }

}
