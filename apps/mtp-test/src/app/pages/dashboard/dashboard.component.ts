import { Component } from '@angular/core';
import { DashboardService } from '@mtp-test/client/app/services/dashboard.service';

@Component({
  selector: 'mtp-test-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private dashboardService: DashboardService) {}

  updateChart() {
    this.dashboardService.getTurnovers().subscribe();
  }
}
