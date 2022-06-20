import { IOrder } from '@mtp-test/api-interfaces';
import {
  Injectable,
  NotFoundException,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { UpdateOrderDto } from './order.dto';

@Injectable()
export class OrdersService implements OnApplicationBootstrap {
  private dbPath = join(process.cwd(), 'data/orders.json');
  private orders: IOrder[];

  constructor() {}

  async onApplicationBootstrap() {
    await this.loadData();
  }

  getOrders() {
    return this.orders;
  }

  async updateOrder(orderId: string, data: UpdateOrderDto) {
    const order = this.orders.find((_order) => _order.id === orderId);
    if (!order) {
      throw new NotFoundException();
    }

    Object.assign(order, data);
    writeFile(this.dbPath, JSON.stringify(this.orders), {
      encoding: 'utf-8',
    });

    return order;
  }

  private async loadData() {
    const content = await readFile(this.dbPath, {
      encoding: 'utf-8',
    });
    this.orders = JSON.parse(content);
  }
}
