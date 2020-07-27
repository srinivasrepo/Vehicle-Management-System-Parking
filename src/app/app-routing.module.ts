import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "aboutus", redirectTo: "aboutus", pathMatch: "full" },
  { path: "contactus", component: ContactusComponent },
  { path: "contactus", redirectTo: "contactus", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "login", redirectTo: "login", pathMatch: "full" },
  // {path:"**", }
  // { path: "**", redirectTo: "", pathMatch: "full" },
  { path: "admin", loadChildren: "./admin/admin.module#AdminModule" },
  { path: "safeguard", loadChildren: "./safeguard/safeguard.module#SafeguardModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
