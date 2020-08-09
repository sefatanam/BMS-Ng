import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AppError } from 'src/common/app-error';
import { NotFoundError } from 'src/common/not-found-error';
import { BadInput } from 'src/common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;
  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getAll().subscribe(posts => this.posts = posts)
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }; input.value = '';

    this.service.create(post).subscribe(newPostId => {
      post['id'] = newPostId;
      this.posts.splice(0, 0, post);
    }, (error: AppError) => {
      if (error instanceof BadInput) {
        alert('This post has already been deleted.')
      } else throw error;
    })

  }

  updatePost(post) {
    this.service.update(post).subscribe(updatedPost => { console.log(updatedPost) })
  }

  deletePost(post) {

    this.service.delete(post.id).subscribe(() => {
      let index = this.posts.indexOf(post)
      this.posts.splice(index, 1);
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.')
      } else throw error;
    })
  }

}
