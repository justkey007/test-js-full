import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [DashboardModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
