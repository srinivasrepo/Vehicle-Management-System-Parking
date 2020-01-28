import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { CheckincheckoutregistrationComponent } from './checkincheckoutregistration/checkincheckoutregistration.component';
import { SafeguarddashboardComponent } from './safeguarddashboard/safeguarddashboard.component';
import { DefaultsafeguardComponent } from './defaultsafeguard/defaultsafeguard.component';


const routes: Routes = [
  { path:"safeguarddashboard",component:SafeguarddashboardComponent,children:[
  { path:"employeedetails",component:EmployeedetailsComponent},
  { path:"checkincheckoutregistration",component:CheckincheckoutregistrationComponent},
  { path:"defaultsafeguard",component:DefaultsafeguardComponent},
  { path:"", redirectTo:"defaultsafeguard",pathMatch:"full" }
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafeguardRoutingModule { }
