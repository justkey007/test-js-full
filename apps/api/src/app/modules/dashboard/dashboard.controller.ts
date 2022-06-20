import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get('turnovers')
  getTurnovers() {
    return this.dashboardService.getTurnovers();
  }
}
