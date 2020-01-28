import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmployeeregistrationComponent } from './employeeregistration/employeeregistration.component';
import { SafeguardregistrationComponent } from './safeguardregistration/safeguardregistration.component';
import { CheckincheckoutdetailsComponent } from './checkincheckoutdetails/checkincheckoutdetails.component';
import { from } from 'rxjs';
import { DefaultadminComponent } from './defaultadmin/defaultadmin.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AdmindashboardComponent, EmployeeregistrationComponent, SafeguardregistrationComponent, CheckincheckoutdetailsComponent, DefaultadminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
