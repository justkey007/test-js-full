import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { TurnoversChartComponent } from './components/turnovers-chart/turnovers-chart.component';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './routes';

@NgModule({
  declarations: [
    DashboardComponent,
    OrdersTableComponent,
    TurnoversChartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    NgApexchartsModule,
    AgGridModule,
  ],
})
export class DashboardModule {}
