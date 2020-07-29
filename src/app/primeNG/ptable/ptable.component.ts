import { Component, OnInit } from "@angular/core";
import { MemberService } from "src/app/services/member.service";
import { Observable } from "rxjs";

const DATA = [
  { brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff" },
  { brand: "Audi", year: 2011, color: "Black", vin: "gwregre345" },
  { brand: "Renault", year: 2005, color: "Gray", vin: "h354htr" },
  { brand: "BMW", year: 2003, color: "Blue", vin: "j6w54qgh" },
  { brand: "Mercedes", year: 1995, color: "Orange", vin: "hrtwy34" },
  { brand: "Volvo", year: 2005, color: "Black", vin: "jejtyj" },
  { brand: "Honda", year: 2012, color: "Yellow", vin: "g43gr" },
  { brand: "Jaguar", year: 2013, color: "Orange", vin: "greg34" },
  { brand: "Ford", year: 2000, color: "Black", vin: "h54hw5" },
  { brand: "Fiat", year: 2013, color: "Red", vin: "245t2s" },
];

export interface Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}
export interface Member {
  id?;
  firstName?;
  lastName?;
  contactNo?;
  address?;
}
@Component({
  selector: "app-ptable",
  templateUrl: "./ptable.component.html",
  styleUrls: ["./ptable.component.css"],
})
export class PtableComponent implements OnInit {

  members: any;
  cars2: Car[];

  constructor(private _service: MemberService) {


  }

  ngOnInit() {
    this._service.getMembers().subscribe(res => this.members = res)
  }



  onRowEditInit(member: Member) {
    // this.members[member.id] = { ...member }
  }

  onRowEditSave(member: Member) {
    console.log('EDIT', member)

  }

  onRowEditCancel(member: Member, index: number) {

  }
}
