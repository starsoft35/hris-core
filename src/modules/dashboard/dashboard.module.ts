import { Module } from '@nestjs/common';
import { DashboardChartController } from './controllers/dashboard-chart.controller';
import { DashboardChartService } from './services/dashboard-chart.service';

@Module({
  controllers: [DashboardChartController],
  providers: [DashboardChartService],
})
export class DashboardModule {}
