import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeguardRoutingModule } from './safeguard-routing.module';
import { SafeguarddashboardComponent } from './safeguarddashboard/safeguarddashboard.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { CheckincheckoutregistrationComponent } from './checkincheckoutregistration/checkincheckoutregistration.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { DefaultsafeguardComponent } from './defaultsafeguard/defaultsafeguard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SafeguarddashboardComponent, EmployeedetailsComponent, CheckincheckoutregistrationComponent, DefaultsafeguardComponent],
  imports: [
    CommonModule,
    SafeguardRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ]
})
export class SafeguardModule { }
