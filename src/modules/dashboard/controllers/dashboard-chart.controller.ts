import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { DashboardChart } from '../entities/dashboard-chart.entity';
import { DashboardChartService } from '../services/dashboard-chart.service';

@Controller(DashboardChart.plural)
export class DashboardChartController extends BaseController<DashboardChart> {
  constructor(dashboardChartService: DashboardChartService) {
    super(dashboardChartService, DashboardChart);
  }
}
