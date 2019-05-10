import { Injectable } from '@nestjs/common';
import { DashboardChart } from '../entities/dashboard-chart.entity';
import { BaseService } from 'src/core/services/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DashboardChartService extends BaseService<DashboardChart> {
  constructor(
    @InjectRepository(DashboardChart)
    dashboardChartRepository: Repository<DashboardChart>,
  ) {
    super(dashboardChartRepository);
  }
}
