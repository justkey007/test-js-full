import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TimeoutService } from './timeout.service';

@Injectable({
  providedIn: 'root',
})
export class TimeoutResolver implements Resolve<any> {
  constructor(private timeoutSservice: TimeoutService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.timeoutSservice.get();
  }
}
