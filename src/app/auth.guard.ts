import {CanActivate, Router} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private authservice : AuthService, private router: Router) {
  }
  canActivate(){
    if (this.authservice.isLoggedIn){
      return true;
    }

  this.router.navigate(['/login']);
  return false;
  }
}
