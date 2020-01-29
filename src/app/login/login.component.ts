import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public rs: Router,public ls: LoginService ) { }

  ngOnInit() {
  }

  sendData(s){
    console.log(s);
    if(s.name==="admin" && s.password==="admin")
    {
      console.log("admin");
      
      this.rs.navigateByUrl("admindashboard");
      // alert("Admin logged In Successfully");
    }
    else if(s.name==="safeguard" && s.password==="safeguard")
    {      
      console.log("safeguard");
      this.rs.navigate(["safeguarddashboard"]);
      // alert("Safeguard logged In Successfully");
    }
    else{
      console.log("invalid username");
      // alert("Invalid username or password")
      // "ng config -g cli.warnings.versionMismatch false"
    }
  }

}
  // sendData(obj) {
    //console.log("srinivas");
    // this.rs.navigateByUrl("/admindashboard")
    // } 

//     sendData(userObj){
//       console.log(userObj)
//       this.ls.loginUser(userObj).subscribe(res=>{
//         localStorage.setItem("token",sessionStorage["token"])
//           if (res["message"]=="invalid name"){
//             alert("Invalid User Name")
//           }
//           else if(res["messege"]=="invalid password"){
//             alert("Invalid Password")
//           }
//           else{
//             alert(res["message"]);
//             this.ls.isloggedIn=true;
//             localStorage.setItem("token",res["tokden"]);
//             this.rs.navigate(['/safeguardregistration'])
//             console.log("Logged In",this.ls.isloggedIn);
//           }
//       })
//     }

// }
