import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { SafeguardregistrationComponent } from './safeguardregistration/safeguardregistration.component';
import { CheckincheckoutdetailsComponent } from './checkincheckoutdetails/checkincheckoutdetails.component';
import { DefaultadminComponent } from './defaultadmin/defaultadmin.component';


const routes: Routes = [
  {
    path: "admindashboard", component: AdmindashboardComponent, children: [
      { path: "employeeregistration", component: EmployeeregistrationComponent },
      { path: "safeguardregistration", component: SafeguardregistrationComponent },
      { path: "checkincheckoutdetails", component: CheckincheckoutdetailsComponent },
      { path: "defaultadmin",component:DefaultadminComponent},
      {path:"",redirectTo:"defaultadmin",pathMatch:"full"}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
