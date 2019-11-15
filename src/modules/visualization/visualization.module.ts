import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChartDimensionItem } from './other/entities/chart-dimension-item.entity';
import { ChartDimension } from './other/entities/chart-dimension.entity';
import { DashboardItem } from './dashboard-item/entities/dashboard-item.entity';
import { Dashboard } from './dashboard/entities/dashboard.entity';
import { ReportTableDimension } from './other/entities/report-table-dimension.entity';
import { ReportTable } from './report-table/entities/report-table.entity';
import { ReportTableDimensionItem } from './other/entities/report-table-dimension-item.entity';
import { MapView } from './other/entities/map-view.entity';
import { Map } from './map/entities/map.entity';
import { MapViewDimension } from './other/entities/map-view-dimension.entity';
import { MapViewDimensionItem } from './other/entities/map-view-dimension-item.entity';
import { DashboardItemChart } from './other/entities/dashboard-item-chart.entity';
import { DashboardItemReportTable } from './other/entities/dashboard-item-report-table.entity';
import { DashboardItemMap } from './other/entities/dashboard-item-map.entity';
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
import { OtherModule } from './other/other.module';

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
    OtherModule,
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
export class VisualizationModule { }
