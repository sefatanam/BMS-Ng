import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {






  courses = {
    title: ' a versy versu long test here & there would be a chnage doiej dfss fsklfnf fsfsdf dsf sdflewdskmnflswbfsdsmdf f sdifslndkms adkasamdas lsamnks m,sd fladnf;amf sdf sanfanfjwedf',
    rating: 4.5673,
    students: 23422,
    price: 190.95,
    releaseDate: new Date(2020, 1, 21)
  }

  // email;

  // imageUrl = "https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

  // onSave() {
  //   // $event.stopPropagation();
  //   console.log('This is DOM', this.email)
  // }
  // onDivClicked($event): void {
  //   console.log("This is from DIV", $event)
  // }

}
