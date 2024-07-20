import { Injectable } from '@angular/core';
import { CanActivateFn,CanActivate, ActivatedRouteSnapshot, Router , UrlTree, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../demo/service/auth.service';

@Injectable({
  providedIn:'root'
})

export class UserLoggedGuard implements CanActivate{
  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.authService.isLoggedIn()){
     
      return true;

    }
    this.router.navigate(["auth/login"]);
    return false;
  }
}
