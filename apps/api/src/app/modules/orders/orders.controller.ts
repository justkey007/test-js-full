import { IOrder } from '@mtp-test/api-interfaces';
import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('')
  getOrders() {
    return this.ordersService.getOrders().slice(-20);
  }

  @Patch(':orderId')
  updateOrder(@Param('orderId') orderId: string, @Body() data: IOrder) {
    return this.ordersService.updateOrder(orderId, data);
  }
}
