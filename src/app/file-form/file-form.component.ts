import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup
} from "@angular/forms";
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent implements OnInit {
  fileToUpload: File = null;

  constructor(private _fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    // this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
    //   // do something, if upload success
    // }, error => {
    //   console.log(error);
    // });
  }

  // postFile(fileToUpload: File): Observable<boolean> {
  //   // const endpoint = 'your-destination-url';
  //   // const formData: FormData = new FormData();
  //   // formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   // return this.httpClient
  //   //   .post(endpoint, formData, { headers: yourHeadersConfig })
  //   //   .map(() => { return true; })
  //   //   .catch((e) => this.handleError(e));
  // }



}
