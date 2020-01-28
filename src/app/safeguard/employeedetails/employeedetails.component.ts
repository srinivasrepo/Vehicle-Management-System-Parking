import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  getEmpData: any[]=[];

  constructor(public hc:HttpClient ) { }

  ngOnInit() {
    this.hc.get('/readEmpInSG').subscribe(res=>{
      this.getEmpData=res["message"]
    })
  }

}
