import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [DashboardModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
