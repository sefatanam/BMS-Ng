import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { AppError } from 'src/common/app-error';
import { BadInput } from 'src/common/bad-input';
import { HttpClient } from '@angular/common/http';
import { NotFoundError } from 'src/common/not-found-error';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private url: string, private http: HttpClient) { }


    getAll() {
        return this.http.get(this.url)
            .pipe(map(res => res), catchError(this.handleError))
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(map(res => res), catchError(this.handleError))
    }

    update(resource) {
        return this.http.patch(this.url + resource.id, JSON.stringify({ isRead: true }))
            .pipe(map(res => res), catchError(this.handleError));
    }

    delete(id) {
        return this.http.delete(this.url + id)
            .pipe(map(res => res), catchError(this.handleError));
    }


    private handleError(error: Response) {
        if (error.status === 404) return Observable.throw(new NotFoundError(error))
        if (error.status === 400) return Observable.throw(new BadInput(error.json()))
        return Observable.throw(new AppError(error))
    }
}
