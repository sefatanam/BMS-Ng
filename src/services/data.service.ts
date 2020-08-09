import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { AppError } from 'src/common/app-error';
import { BadInput } from 'src/common/bad-input';
import { HttpClient } from '@angular/common/http';
import { NotFoundError } from 'src/common/not-found-error';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    // private url = 'https://jsonplaceholder.typicode.com/posts';
    // private url;

    constructor(private url: string, private http: HttpClient) { }


    getAll() {

        return this.http.get(this.url).pipe(
            catchError(this.handleError))

        // return this.http.get(this.url).pipe(
        //   catchError((error: Response) => {
        //     if (error.status === 404) return Observable.throw(new NotFoundError(error))
        //     return Observable.throw(new AppError(error))
        //   }));;
    }

    create(resource) {

        return this.http.post(this.url, JSON.stringify(resource)).pipe(
            catchError(this.handleError))

        // return this.http.post(this.url, JSON.stringify(post)).pipe(
        //   catchError((error: Response) => {
        //     if (error.status === 404) return Observable.throw(new NotFoundError(error))
        //     return Observable.throw(new AppError(error))
        //   }));;;
    }

    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true })).pipe(
            catchError(this.handleError));

        // return this.http.patch(this.url + post.id, JSON.stringify({ isRead: true })).pipe(
        //   catchError((error: Response) => {
        //     if (error.status === 404) return Observable.throw(new NotFoundError(error))
        //     return Observable.throw(new AppError(error))
        //   }));;;
    }

    delete(id) {
        return this.http.delete(this.url + '/' + id).pipe(
            catchError(this.handleError));

        // return this.http.delete(this.url + id).pipe(
        //   catchError((error: Response) => {
        //     if (error.status === 404) return Observable.throw(new NotFoundError(error))
        //     return Observable.throw(new AppError(error))
        //   }));
    }


    private handleError(error: Response) {
        if (error.status === 404) return Observable.throw(new NotFoundError(error))
        if (error.status === 400) return Observable.throw(new BadInput(error.json()))
        return Observable.throw(new AppError(error))
    }
}
