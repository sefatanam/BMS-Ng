import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor() { }


  image = './assets/photo.jpg';
  string = 'data:image/jpg;charset=utf-8;base64';
  emp = 'D:\SILENCE_Files\Files\Employee\pro_8820122049-0.jpg';
  photo = 'file:\\D:\SILENCE_Files\Files\Employee\pro_8820122049-0.jpg';

  ngOnInit() {

  }

  onSelectFile(e: { target: HTMLInputElement; }): void {
    const files = e.target.files;

    if (files) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (event: any) => {
        this.image = event.target.result;
      };

    }
  }

}
