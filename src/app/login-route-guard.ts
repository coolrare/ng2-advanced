import { Router, RouterStateSnapshot,  ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {

    // return Observable.of(true);

    if(route.queryParams['apikey'] == '123') {
      return Observable.of(true);
    } else {
      this.router.navigateByUrl('/login');
      return Observable.of(false);
    }

  }
}
