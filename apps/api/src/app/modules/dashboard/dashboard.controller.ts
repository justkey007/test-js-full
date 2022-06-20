import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';
@Controller('dashboard')
@ApiTags('Dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get('turnovers')
  getTurnovers() {
    return this.dashboardService.getTurnovers();
  }
}
