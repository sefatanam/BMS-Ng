import { Component, OnInit } from "@angular/core";
import { MemberService, Member } from "src/app/services/member.service";
import { Observable } from "rxjs";


const shiftData = [
  {
    "id": 1,
    "name": "Session A",
    "description": "test",
    "fromTime": "09:00:00",
    "toTime": "11:00:00",
    "code": "",
    "shiftId": 1,
    "shiftName": "Morning Shift",
    "allowLateFor": 5,
    "isForAcademic": false,
    "organizationId": 1,
    "organizationName": "AITS",
    "createdById": 1,
    "createdOn": "2020-07-28T01:22:04.9731443",
    "lastModifiedById": 1,
    "lastModifiedOn": "2020-07-28T01:52:45.2367131",
    "publicIpAddress": null,
    "localIpAddress": null,
    "macAddress": null,
    "browserInfo": null,
    "isDeleted": false,
    "deletedById": null,
    "deletedOn": null,
    "isDisable": false,
    "disabledById": null,
    "disableOn": null,
    "disableReason": null,
    "enabledById": null,
    "enabledOn": null,
    "enableReason": null,
    "isDraft": false
  },
  {
    "id": 2,
    "name": "Session B",
    "description": "Session B",
    "fromTime": "11:01:00",
    "toTime": "13:00:00",
    "code": "",
    "shiftId": 1,
    "shiftName": "Morning Shift",
    "allowLateFor": 10,
    "isForAcademic": false,
    "organizationId": 1,
    "organizationName": "AITS",
    "createdById": 1,
    "createdOn": "2020-09-14T23:56:18.344944",
    "lastModifiedById": null,
    "lastModifiedOn": null,
    "publicIpAddress": null,
    "localIpAddress": null,
    "macAddress": null,
    "browserInfo": null,
    "isDeleted": false,
    "deletedById": null,
    "deletedOn": null,
    "isDisable": false,
    "disabledById": null,
    "disableOn": null,
    "disableReason": null,
    "enabledById": null,
    "enabledOn": null,
    "enableReason": null,
    "isDraft": false
  },
  {
    "id": 3,
    "name": "Session B",
    "description": "Session B",
    "fromTime": "11:01:00",
    "toTime": "13:00:00",
    "code": "",
    "shiftId": 1,
    "shiftName": "Night Shift",
    "allowLateFor": 10,
    "isForAcademic": false,
    "organizationId": 1,
    "organizationName": "AITS",
    "createdById": 1,
    "createdOn": "2020-09-14T23:56:18.344944",
    "lastModifiedById": null,
    "lastModifiedOn": null,
    "publicIpAddress": null,
    "localIpAddress": null,
    "macAddress": null,
    "browserInfo": null,
    "isDeleted": false,
    "deletedById": null,
    "deletedOn": null,
    "isDisable": false,
    "disabledById": null,
    "disableOn": null,
    "disableReason": null,
    "enabledById": null,
    "enabledOn": null,
    "enableReason": null,
    "isDraft": false
  },
  {
    "id": 4,
    "name": "Session B",
    "description": "Session B",
    "fromTime": "11:01:00",
    "toTime": "13:00:00",
    "code": "",
    "shiftId": 1,
    "shiftName": "Night Shift",
    "allowLateFor": 10,
    "isForAcademic": false,
    "organizationId": 1,
    "organizationName": "AITS",
    "createdById": 1,
    "createdOn": "2020-09-14T23:56:18.344944",
    "lastModifiedById": null,
    "lastModifiedOn": null,
    "publicIpAddress": null,
    "localIpAddress": null,
    "macAddress": null,
    "browserInfo": null,
    "isDeleted": false,
    "deletedById": null,
    "deletedOn": null,
    "isDisable": false,
    "disabledById": null,
    "disableOn": null,
    "disableReason": null,
    "enabledById": null,
    "enabledOn": null,
    "enableReason": null,
    "isDraft": false
  }
]


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


class GroupWiseShift {
  shiftName = '';
  listOfShift = [];
}
@Component({
  selector: "app-ptable",
  templateUrl: "./ptable.component.html",
  styleUrls: ["./ptable.component.css"],
})
export class PtableComponent implements OnInit {

  members: any;

  shiftD: any[] = [];
  constructor(private _service: MemberService) {


  }
  groupShifts: GroupWiseShift[] = [];
  shifts: any[] = [];
  sessions: any[] = [];

  ngOnInit() {


    // const grouped = this.groupBy(shiftData, shift => shift.shiftName);
    // // console.log(grouped.get('Night Shift'));

    // for (let s of this.shift) {
    //   let obj: GroupWiseShift = new GroupWiseShift();
    //   var list = grouped.get(s);
    //   obj.shiftName = s;
    //   obj.listOfShift = list;
    //   this.groupShifts.push(obj);
    //   this.sessions.push(list);
    // }
    // console.log(this.groupShifts);
    this.shiftD = shiftData;
    // this._service.getMembers().subscribe(res => this.members = res)
  }

  shift: any[] = [];

  groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
        this.shift.push(key);
      } else {
        collection.push(item);
      }
    });
    return map;
  }
  // onRowEditInit(member: Member) {
  //   // this.members[member.id] = { ...member }
  // }

  // onRowEditSave(member: Member) {
  //   console.log('EDIT', member)
  //   let object = new Member();
  //   object.id = member.id;
  //   object.firstName = member.firstName;
  //   object.lastName = member.lastName;
  //   object.contactNo = member.contactNo;
  //   object.address = member.address;
  //   object.createOn = member.createOn;
  //   this._service.putMember(object).subscribe();

  // }

  // onRowEditCancel(member: Member, index: number) {

  // }
}
