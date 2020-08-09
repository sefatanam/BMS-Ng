import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService {
  //  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http)
  }


  // getPosts() {

  //   return this.http.get(this.url).pipe(
  //     catchError(this.handleError))

  //   // return this.http.get(this.url).pipe(
  //   //   catchError((error: Response) => {
  //   //     if (error.status === 404) return Observable.throw(new NotFoundError(error))
  //   //     return Observable.throw(new AppError(error))
  //   //   }));;
  // }

  // createPost(post) {

  //   // return this.http.post(this.url, JSON.stringify(post)).pipe(
  //   //   catchError(this.handleError))

  //   return this.http.post('https://jsonplaceholder.typicode.com/posts/', JSON.stringify(post)).pipe(
  //     catchError((error: Response) => {
  //       if (error.status === 404) return Observable.throw(new NotFoundError(error))
  //       return Observable.throw(new AppError(error))
  //     }));;;
  // }

  // updatePost(post) {
  //   return this.http.patch(this.url + post.id, JSON.stringify({ isRead: true })).pipe(
  //     catchError(this.handleError));

  //   // return this.http.patch(this.url + post.id, JSON.stringify({ isRead: true })).pipe(
  //   //   catchError((error: Response) => {
  //   //     if (error.status === 404) return Observable.throw(new NotFoundError(error))
  //   //     return Observable.throw(new AppError(error))
  //   //   }));;;
  // }

  // deletePost(id) {
  //   return this.http.delete(this.url + id).pipe(
  //     catchError(this.handleError));

  //   // return this.http.delete(this.url + id).pipe(
  //   //   catchError((error: Response) => {
  //   //     if (error.status === 404) return Observable.throw(new NotFoundError(error))
  //   //     return Observable.throw(new AppError(error))
  //   //   }));
  // }


  // private handleError(error: Response) {
  //   if (error.status === 404) return Observable.throw(new NotFoundError(error))
  //   if (error.status === 400) return Observable.throw(new BadInput(error.json()))
  //   return Observable.throw(new AppError(error))
  // }
}
