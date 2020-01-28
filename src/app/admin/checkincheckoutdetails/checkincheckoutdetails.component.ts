import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkincheckoutdetails',
  templateUrl: './checkincheckoutdetails.component.html',
  styleUrls: ['./checkincheckoutdetails.component.css']
})
export class CheckincheckoutdetailsComponent implements OnInit {
  storeCico: any[]=[];

  constructor( public hc:HttpClient) { }

  ngOnInit() {
    this.hc.get('/readCicoDetails').subscribe(res=>{
      this.storeCico=res["message"]
    })
  }

  astoreCico: any[]=[];
  cobj: any;
  id: any;
  name: any;
  vehicleno: any;
  emailid: any;
  contactno: any;
  date: any;
  checkin: any;
  checkout: any;
  up: any;

  editCico(c){
    this.cobj=c;
    console.log(c);
    this.id=this.cobj.id;
    this.name=this.cobj.name;
    this.vehicleno=this.cobj.vehicleno;
    this.emailid=this.cobj.emailid;
    this.contactno=this.cobj.contactno;
    this.date=this.cobj.date;
    this.checkin=this.cobj.checkin;
    this.checkout=this.cobj.checkout;
  }

  updataCico(obj){
    console.log(this.vehicleno)
    // console.log(obj)
    this.up=obj
    console.log(this.up)
    this.hc.put('/aupdatecicodetails',{id:obj.id,name:obj.name, emailid:obj.emailid, contactno:obj.contactno, date:obj.date, checkin:obj.checkin, checkout:obj.checkout, vehicleeno:this.vehicleno }).subscribe(res =>{
     console.log(this.name)
      if (res["xyz"]=="success"){
        alert("successfully updated")
      }
      this.astoreCico=res["message"]
      console.log(this.astoreCico)
    })
  }


  de: any;
  deleteCico(data) {
    this.de = data
    console.log(this.de)
    this.hc.delete(`/deletecico/${this.de}`).subscribe(res =>
      this.astoreCico = res["message"]
)}  

}
