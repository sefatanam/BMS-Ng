import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Catagory} from 'src/app/models/catagory-model';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class CatagoryService {

  
  constructor(private http:HttpClient ) { }

  formData: Catagory

  readonly APIUrl ="http://localhost:2429/api";

  getCatagoryList(): Observable<Catagory[]>{
    return this.http.get<Catagory[]>(this.APIUrl+'/Catagories');
  }

  addCatagory(catagory :Catagory){

    return this.http.post(this.APIUrl+'/Catagories',catagory); 
  }

  private _listener = new Subject<any>();
  listen():Observable<any>{
    return this._listener.asObservable();
  }


  filter(filterBy:string){
    this._listener.next(filterBy);
  }


  delCatagory(id:number){
    return this.http.delete(this.APIUrl+'/Catagories/'+id);
  }

  updateCatagory(catagory:Catagory){
    return this.http.put(this.APIUrl+'/Catagories',catagory);
  }
}
