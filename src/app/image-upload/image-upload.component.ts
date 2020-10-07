import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  cars: any[];

  constructor() {
    this.cars = [
      { label: 'Audi', value: 1 },
      { label: 'BMW', value: 2 },
      { label: 'Fiat', value: 3 },
      { label: 'Ford', value: 3 },
      { label: 'Honda', value: 4 },
      { label: 'Jaguar', value: 5 },
      { label: 'Mercedes', value: 6 },
      { label: 'Renault', value: 7 },
      { label: 'VW', value: 8 },
      { label: 'Volvo', value: 9 }
    ];
  }




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


  GetSelectedIdChild(num: number): void {
    console.log('DD CHILD CALLEDD', num);
  }

}
