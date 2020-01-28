import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//imports service --- to raed data from url

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeregistrationComponent implements OnInit {
  storeEmpData: any[] = [];
  data: any;
  up: any;
  //kum:object[]=[];---------to read data from url
  constructor(
    //public variable:service-name, public hc:HttpClient---to read data from url
    public hc: HttpClient
  ) { }

  ngOnInit() {
    //this.ds.senData().subscribe((res)=>{this.kum=data});--- to read data from url
    //in service-name.js ---- write fake data of url -------readData():Observable<any> {return this.get("https://jsonplaceholder/users");}
    this.hc.get('/readEmp').subscribe(res => {
      this.storeEmpData = res["message"]

    })


  }

  empData(oj) {
    console.log(oj);
    this.hc.post("/saveemp", oj).subscribe(res => {
      alert(res["message"]);
      // localStorage.setItem("srinivas", "cnu");

    })


  }
  de: any;
  deleteEmp(data) {
    this.de = data
    console.log(this.de)
    this.hc.delete(`/deleteEmp/${this.de}`).subscribe(res =>
      this.storeEmpData = res["message"]


    )
  }
  id: any;
  name: any;
  employeevehicleno: any;
  email: any;
  contact: any;
  city: any;
  robj: any;
  x: any;
  edit(received) {
    this.robj = received;
    this.id = this.robj.id;
    this.name = this.robj.name;
    this.employeevehicleno = this.robj.employeevehicleno;
    this.email = this.robj.email;
    this.contact = this.robj.contact;
    this.city = this.robj.city;

  }
  // const arr=this.storeEmpData.filter( (x)=>{
  //   this.id1 = received.id;
  // this.name1 = received.name;
  // this.employeevehicle1 = received.employeevehicleno;
  // this.email1 = received.email;
  // this.contact1 = received.contact;
  // this.city1 = received.city;
  // } )
  updatedData(obj) {
    this.hc.put("/updateemp", { name: obj.name, employeevehicleno: obj.employeevehicleno, email: obj.email, contact: obj.contact, city: obj.city, id: this.id }).subscribe(res => {

      if (res["id"] == "success") {
        alert("Successfully updated")

      }
      this.storeEmpData = res["message"]
    }
    )
  }
}

