import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turnovers } from '@mtp-test/api-interfaces';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  turnovers$ = new BehaviorSubject<Turnovers>({});

  constructor(private http: HttpClient) {}

  getTurnovers() {
    return this.http
      .get<Turnovers>(environment.apiBaseUrl + 'dashboard/turnovers')
      .pipe(
        tap((response) => {
          const data = response;
          this.turnovers$.next(data);
        })
      );
  }
}
