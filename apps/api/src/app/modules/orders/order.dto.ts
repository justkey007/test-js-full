import { IOrder } from '@mtp-test/api-interfaces';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class OrderDto implements IOrder {
  @ApiProperty()
  id: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  orderTime: string;

  @ApiProperty()
  customer: string;
}

export class UpdateOrderDto extends PartialType(OrderDto) {}
