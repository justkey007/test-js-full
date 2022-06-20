import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './routes';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    NgApexchartsModule,
  ],
})
export class DashboardModule {}
