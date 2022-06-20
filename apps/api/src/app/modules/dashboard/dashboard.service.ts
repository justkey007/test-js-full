import { Turnovers } from '@mtp-test/api-interfaces';
import { Injectable } from '@nestjs/common';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class DashboardService {
  constructor(private ordersService: OrdersService) {}

  getTurnovers() {
    const turnovers: Turnovers = {};

    const orders = this.ordersService.getOrders();
    orders.forEach((order) => {
      const date = new Date(order.orderTime);
      const month = date.toLocaleString('default', { month: 'long' });
      const key = `${month}-${date.getFullYear()}`;

      if (turnovers[key]) {
        turnovers[key] += order.amount;
      } else {
        turnovers[key] = order.amount;
      }
    });

    return turnovers;
  }
}
