import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChartDimensionItem } from './chart/entities/chart-dimension-item.entity';
import { ChartDimension } from './chart/entities/chart-dimension.entity';
import { DashboardItem } from './dashboard-item/entities/dashboard-item.entity';
import { Dashboard } from './dashboard/entities/dashboard.entity';
import { ReportTableDimension } from './report-table/entities/report-table-dimension.entity';
import { ReportTable } from './report-table/entities/report-table.entity';
import { ReportTableDimensionItem } from './report-table/entities/report-table-dimension-item.entity';
import { MapView } from './map/entities/map-view.entity';
import { Map } from './map/entities/map.entity';
import { MapViewDimension } from './map/entities/map-view-dimension.entity';
import { MapViewDimensionItem } from './map/entities/map-view-dimension-item.entity';
import { DashboardItemChart } from './dashboard-item/entities/dashboard-item-chart.entity';
import { DashboardItemReportTable } from './dashboard-item/entities/dashboard-item-report-table.entity';
import { DashboardItemMap } from './dashboard-item/entities/dashboard-item-map.entity';
import { DashboardService } from './dashboard/services/dashboard.service';
import { DashboardItemService } from './dashboard-item/services/dashboard-item.service';
import { ReportTableService } from './report-table/services/report-table.service';
import { MapService } from './map/services/map.service';
import { DashboardItemController } from './dashboard-item/controllers/dashboard-item.controller';
import { ReportTableController } from './report-table/controllers/report-table.controller';
import { MapController } from './map/controllers/map.controller';
import { DashboardController } from './dashboard/controllers/dashboard.controller';
import { ChartModule } from './chart/chart.module';
import { DashboardItemModule } from './dashboard-item/dashboard-item.module';
import { MapModule } from './map/map.module';
import { ReportTableModule } from './report-table/report-table.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([
      Dashboard,
      DashboardItem,
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
    ChartModule,
    DashboardItemModule,
    VisualizationModule,
    MapModule,
    ReportTableModule,
  ],
  controllers: [
    DashboardController,
    DashboardItemController,
    ReportTableController,
    MapController,
  ],
  providers: [
    DashboardService,
    DashboardItemService,
    ReportTableService,
    MapService,
  ],
})
export class VisualizationModule {}
