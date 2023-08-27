import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message:string="vous etes decconecter.(cl/yes)"
  name:string;
  password: string;
  auth: AuthService

  constructor(private authService: AuthService, private router:Router) {}
  ngOnInit(){
    this.auth=this.authService;

  }
  setMessage(){
    if(this.auth.isLoggedIn){
      this.message='vous etes connecter'
    }
    else {
      this.message="vous n'ete pas connecte"
    }

  }
  login(){
this.message='tentative de connexion ';
this.auth.login(this.name, this.password).subscribe((isLoggedIn: boolean)=>{
  this.setMessage();
 if(isLoggedIn){
   this.router.navigate(['/country']);
 }else{
   this.password=''
   this.router.navigate(['/login']);
 }

    })
  }
  logout(){
this.auth.logout();
this.message='vous etes deconnecter'
  }

}
