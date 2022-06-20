import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '@mtp-test/api-interfaces';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders$ = new BehaviorSubject<IOrder[]>([]);

  constructor(private http: HttpClient) {}

  getOrders() {
    const url = environment.apiBaseUrl + 'orders';
    return this.http.get<IOrder[]>(url).pipe(
      tap((response) => {
        const data = response;
        this.orders$.next(data);
      })
    );
  }

  updateOrder(order: Partial<IOrder>) {
    const url = environment.apiBaseUrl + 'orders/' + order.id;
    return this.http.patch<IOrder>(url, order).pipe();
  }
}
