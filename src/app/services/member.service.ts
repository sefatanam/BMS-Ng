import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


class Member {
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  address: string = '';
  contactNo: string = '';
}


@Injectable({
  providedIn: 'root'
})


export class MemberService {
  formData: Member;
  memberList: Member[];

  public URL = "https://localhost:5001/api/members";

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get(this.URL);
  }

  postMember(member: Member) {
    console.log('Posted');

    let model = new Member();
    model.id = 0;
    model.firstName = member.firstName;
    model.lastName = member.lastName;
    model.address = member.address;
    model.contactNo = member.contactNo;

    return this.http.post(this.URL, model);
  }

  putMember(formData: Member) {
    return this.http.put(this.URL + 'members/' + formData.id, formData)
  }

  getMemberById(id: number) {
    return this.http.get(this.URL + 'members/' + id);
  }




}
