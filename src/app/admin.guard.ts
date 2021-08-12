import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
//login
import {AuthService} from './core/services/auth.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService:AuthService,
    private router:Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(
      //ver que tiene user
      //tap(user => console.log(user)),
      //que operador va a usar (map)
      map(user => user === null ? false : true), // si el usuario es nulo devulva un true caso contrario false
      //redigir
      tap(hasUser=>{
        if(!hasUser){
          this.router.navigate(['/auth/login']);
        }
      }),
    );
  }
  
}
