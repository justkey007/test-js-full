import { Module } from '@nestjs/common';
import { OrdersModule } from '../orders/orders.module';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
  imports: [OrdersModule],
})
export class DashboardModule {}
