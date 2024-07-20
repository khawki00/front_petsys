import { inject, Injectable } from '@angular/core';
import { CanActivateFn,CanActivate, ActivatedRouteSnapshot, Router , UrlTree, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../demo/service/auth.service';

@Injectable({
  providedIn:'root'
})

class GuardService {
  constructor(private authService: AuthService, private router: Router) {}
  CanActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): boolean {
      if (!this.authService.isLoggedIn()) {
          return true;
      }
      this.router.navigate(['/']);
      return false;
  }
}

export const UserLogoutGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(GuardService).CanActivate(next, state);
};
