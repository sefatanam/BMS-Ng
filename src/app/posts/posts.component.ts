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

  posts: any[];

  constructor(private service: PostsService) {

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(res => {
        this.posts = res as any[];
      })
    // this.service.getPosts()
    //   .subscribe(res => {
    //     this.posts = res as any[];
    //   }, (error: Response) => {
    //     if (error.status === 404) {
    //       alert('This post has already been deleted.')
    //     } else {

    //     }
    //   })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(response => {
        this.posts = response as any[];
        post['id'] = response;
        this.posts.splice(0, 0, post);
      }, (error: AppError) => {
        if (error instanceof BadInput) {
          alert('This post has already been deleted.')
        } else throw error;
      })

    // this.service.createPost(post)
    //   .subscribe(response => {
    //     post['id'] = response;
    //     this.posts.splice(0, 0, post);
    //   }, (error: AppError) => {
    //     if (error instanceof BadInput) {
    //       alert("Bad input!")
    //     }
    //     alert("An unexpected error occured!")
    //     console.log(error)
    //   })
  }

  updatePost(post) {

    this.service.update(post)
      .subscribe(response => {
        console.log(response)
      })

    // this.service.updatePost(post)
    //   .subscribe(response => {
    //     console.log(response)
    //   }, error => {
    //     alert("An unexpected error occured!")
    //     console.log(error)
    //   })
    // we can use put method here
    // this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post) {

    this.service.delete(1000).subscribe(() => {
      let index = this.posts.indexOf(post)
      this.posts.splice(index, 1);
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.')
      } else throw error;
    })
  }


  //   this.service.deletePost(1000).subscribe(response => {
  //     let index = this.posts.indexOf(post)
  //     this.posts.splice(index, 1);
  //   }, (error: AppError) => {
  //     if (error instanceof NotFoundError) {
  //       alert('This post has already been deleted.')
  //     } else {
  //       alert("An unexpected error occured!");
  //       console.log(error)

  //     }

  //     console.log(error)
  //   })
  // }

}
