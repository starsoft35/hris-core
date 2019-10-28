import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Dashboard } from './dashboard.entity';
import { Chart } from './chart.entity';
import { ReportTable } from './report-table.entity';

@Entity('dashboarditem', { schema: 'public' })
export class DashboardItem extends EntityCoreProps {
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

  @ManyToOne(() => Chart, (chart: Chart) => chart.dashboardItems)
  @JoinColumn({ name: 'chartid' })
  chart: Chart | null;

  //   @ManyToOne(() => map, (map: map) => map.dashboarditems, {})
  //   @JoinColumn({ name: 'mapid' })
  //   map: map | null;

  @ManyToOne(
    () => ReportTable,
    (reportTable: ReportTable) => reportTable.dashboardItems,
    {},
  )
  @JoinColumn({ name: 'reporttable' })
  reportTable: ReportTable | null;
}
