import { CanDeactivate, Router,  RouterStateSnapshot,   ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoginComponent } from './login/login.component';

@Injectable()
export class EnsureLoginGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component: LoginComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
    if(component.form.dirty) {
      return confirm('你確定要放棄登入嗎？');
    } else {
      return true;
    }
  }
}
