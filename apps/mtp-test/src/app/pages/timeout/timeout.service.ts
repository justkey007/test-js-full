import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/mtp-test/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TimeoutService {
  constructor(private http: HttpClient) {}

  get() {
    const url = environment.apiBaseUrl + 'timeout';
    return this.http.get(url);
  }
}
