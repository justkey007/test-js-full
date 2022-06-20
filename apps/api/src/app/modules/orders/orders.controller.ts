import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderDto, UpdateOrderDto } from './order.dto';
import { OrdersService } from './orders.service';
@Controller('orders')
@ApiTags('Orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('')
  @ApiResponse({ type: OrderDto, isArray: true })
  getOrders() {
    return this.ordersService.getOrders().slice(-20);
  }

  @Patch(':orderId')
  @ApiResponse({ type: OrderDto })
  updateOrder(@Param('orderId') orderId: string, @Body() data: UpdateOrderDto) {
    return this.ordersService.updateOrder(orderId, data);
  }
}
