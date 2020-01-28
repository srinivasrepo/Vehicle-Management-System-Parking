import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-safeguardregistration',
  templateUrl: './safeguardregistration.component.html',
  styleUrls: ['./safeguardregistration.component.css']
})
export class SafeguardregistrationComponent implements OnInit {
  storeSafeguardData: any;
  constructor(

    public hc: HttpClient
  ) { }

  ngOnInit() {
    
    this.hc.get('/readsafeguard').subscribe(res => {
      this.storeSafeguardData = res["message"]

    })


  }

  SafeGuardData(oj) {
    console.log(oj);
    this.hc.post("/savesafeguard", oj).subscribe(res => {
      alert(res["message"]);
      // localStorage.setItem("srinivas", "cnu");

    })


  }
  de: any;
  deletesafeguard(data) {
    this.de = data
    console.log(this.de)
    this.hc.delete(`/deletesafeguard/${this.de}`).subscribe(res =>
      this.storeSafeguardData = res["message"]
)}

  // name
  //       emailid
  //         contactno
  //          id
  //          password

  name: any;                                                 
  emailid: any;
  contactno: any;
  id: any;
  password: any;
  robj: any;
  x: any;
  edit(received) {
    this.robj = received;    
    this.name = this.robj.name;
    this.emailid = this.robj.emailid;
    this.contactno = this.robj.contactno;
    this.id = this.robj.id;
    this.password = this.robj.password;

  }
  
  updatedData(obj) {
    this.hc.put("/updatsafeguard", { name: obj.name, emailid: obj.emailid, contactno: obj.contactno, password: obj.password, id: this.id }).subscribe(res => {

      if (res["id"] == "success") {
        alert("Successfully updated")

      }
      this.storeSafeguardData = res["message"]
    }
    )
  }
}

