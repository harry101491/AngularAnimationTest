import { Observable } from "rxjs/Observable";

import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from "@angular/router";

export interface CanComponentDeactive {
  canDeactivate : () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactive> {

  canDeactivate(
    component: CanComponentDeactive,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean
  {
    return component.canDeactivate();
  }
}
