import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChartDimensionItem } from './entities/chart-dimension-item.entity';
import { ChartDimension } from './entities/chart-dimension.entity';
import { Chart } from './entities/chart.entity';
import { DashboardItem } from './entities/dashboard-item.entity';
import { Dashboard } from './entities/dashboard.entity';
import { ReportTableDimension } from './entities/report-table-dimension.entity';
import { ReportTable } from './entities/report-table.entity';
import { ReportTableDimensionItem } from './entities/report-table-dimension-item.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([
      Dashboard,
      DashboardItem,
      Chart,
      ChartDimension,
      ChartDimensionItem,
      ReportTable,
      ReportTableDimension,
      ReportTableDimensionItem,
    ]),
  ],
  controllers: [],
  providers: [],
})
export class DashboardModule {}
