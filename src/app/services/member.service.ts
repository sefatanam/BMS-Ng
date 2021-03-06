// import { environment } from '../../environments/environment'
import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export class Member {
  id = 0;
  firstName = '';
  lastName = '';
  address = '';
  contactNo = '';
  createOn: Date = null;
}


@Injectable({
  providedIn: 'root'
})


export class MemberService {
  // formData: Member;
  // memberList: Member[];

  public URL = 'https://localhost:5001/api/members';

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get(this.URL);
  }

  postMember(member: Member) {
    console.log('Posted');

    const model = new Member();
    model.id = 0;
    model.firstName = member.firstName;
    model.lastName = member.lastName;
    model.address = member.address;
    model.contactNo = member.contactNo;
    model.createOn = member.createOn;

    return this.http.post(this.URL, model);
  }

  putMember(formData: Member) {
    return this.http.put(this.URL + '/' + formData.id, formData);
  }

  getMemberById(id: number) {
    return this.http.get(this.URL + '/' + id);
  }




}
