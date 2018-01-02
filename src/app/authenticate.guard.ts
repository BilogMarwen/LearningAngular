import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Window } from 'selenium-webdriver';


@Injectable()
export class AuthenticateGuard implements CanActivate {

  constructor(private rout:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     
      //this.rout.navigate(['/home']);
    return true;
  }
}
