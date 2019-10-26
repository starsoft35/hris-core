import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Dashboard } from './dashboard.entity';
import { Chart } from './chart.entity';

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

  //   @ManyToOne(
  //     () => eventchart,
  //     (eventchart: eventchart) => eventchart.dashboarditems,
  //     {},
  //   )
  //   @JoinColumn({ name: 'eventchartid' })
  //   eventchart: eventchart | null;

  //   @ManyToOne(() => map, (map: map) => map.dashboarditems, {})
  //   @JoinColumn({ name: 'mapid' })
  //   map: map | null;

  //   @ManyToOne(
  //     () => reporttable,
  //     (reporttable: reporttable) => reporttable.dashboarditems,
  //     {},
  //   )
  //   @JoinColumn({ name: 'reporttable' })
  //   reporttable: reporttable | null;

  //   @ManyToOne(
  //     () => eventreport,
  //     (eventreport: eventreport) => eventreport.dashboarditems,
  //     {},
  //   )
  //   @JoinColumn({ name: 'eventreport' })
  //   eventreport: eventreport | null;
}
