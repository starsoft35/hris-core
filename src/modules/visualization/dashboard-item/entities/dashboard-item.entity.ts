import { EntityCoreProps } from '../../../../core/entities/entity-core-props';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { DashboardItemChart } from '../../other/entities/dashboard-item-chart.entity';
import { DashboardItemMap } from '../../other/entities/dashboard-item-map.entity';
import { DashboardItemReportTable } from '../../other/entities/dashboard-item-report-table.entity';
import { Dashboard } from '../../dashboard/entities/dashboard.entity';

@Entity('dashboarditem', { schema: 'public' })
export class DashboardItem extends EntityCoreProps {
  static plural = 'dashboardItems';
  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'appkey',
  })
  appkey: string | null;

  @Column('character varying', {
    nullable: true,
    length: 50,
    name: 'shape',
  })
  shape: string | null;

  @Column('integer', {
    nullable: true,
    name: 'x',
  })
  x: number | null;

  @Column('integer', {
    nullable: true,
    name: 'y',
  })
  y: number | null;

  @Column('integer', {
    nullable: true,
    name: 'height',
  })
  height: number | null;

  @Column('integer', {
    nullable: true,
    name: 'width',
  })
  width: number | null;

  @ManyToOne(
    () => Dashboard,
    (dashboard: Dashboard) => dashboard.dashboardItems,
  )
  @JoinColumn({ name: 'dashboardid' })
  dashboard: Dashboard;

  @OneToMany(
    () => DashboardItemChart,
    (dashboardItemChart: DashboardItemChart) =>
      dashboardItemChart.dashboardItem,
  )
  dashboardItemCharts: DashboardItemChart[];

  @OneToMany(
    () => DashboardItemReportTable,
    (dashboardItemReportTable: DashboardItemReportTable) =>
      dashboardItemReportTable.dashboardItem,
  )
  dashboardItemReportTables: DashboardItemReportTable[];

  @OneToMany(
    () => DashboardItemMap,
    (dashboardItemMap: DashboardItemMap) => dashboardItemMap.dashboardItem,
  )
  dashboardItemMaps: DashboardItemMap[];
}
