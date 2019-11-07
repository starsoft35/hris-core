import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { Chart } from '../chart/entities/chart.entity';
import { DashboardItem } from '../dashboard-item/entities/dashboard-item.entity';

@Entity('dashboarditemchart', { schema: 'public' })
export class DashboardItemChart {
  @ManyToOne(
    () => DashboardItem,
    (dashboardItem: DashboardItem) => dashboardItem.dashboardItemCharts,
    { primary: true },
  )
  @JoinColumn({ name: 'dashboarditemid' })
  dashboardItem: DashboardItem;

  @ManyToOne(() => Chart, (chart: Chart) => chart.dashboardItemCharts)
  @JoinColumn({ name: 'chartid' })
  chart: Chart;
}
