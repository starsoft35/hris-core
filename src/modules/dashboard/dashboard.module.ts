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
import { MapView } from './entities/map-view.entity';
import { Map } from './entities/map.entity';
import { MapViewDimension } from './entities/map-view-dimension.entity';
import { MapViewDimensionItem } from './entities/map-view-dimension-item.entity';
import { DashboardItemChart } from './entities/dashboard-item-chart.entity';
import { DashboardItemReportTable } from './entities/dashboard-item-report-table.entity';
import { DashboardItemMap } from './entities/dashboard-item-map.entity';
import { DashboardService } from './services/dashboard.service';
import { DashboardItemService } from './services/dashboard-item.service';
import { ChartService } from './services/chart.service';
import { ReportTableService } from './services/report-table.service';
import { MapService } from './services/map.service';

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
      Map,
      MapView,
      MapViewDimension,
      MapViewDimensionItem,
      DashboardItemChart,
      DashboardItemReportTable,
      DashboardItemMap,
    ]),
  ],
  controllers: [],
  providers: [
    DashboardService,
    DashboardItemService,
    ChartService,
    ReportTableService,
    MapService,
  ],
})
export class DashboardModule {}
