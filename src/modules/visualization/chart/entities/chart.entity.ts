import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { EntityCoreProps } from '../../../../core/entities/entity-core-props';
import { User } from '../../../system/user/entities/user.entity';
import { DashboardItemChart } from '../../dashboard-item/entities/dashboard-item-chart.entity';
import { ChartDimension } from './chart-dimension.entity';

@Entity('chart', { schema: 'public' })
export class Chart extends EntityCoreProps {
  static plural = 'charts';

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'domainaxislabel',
  })
  domainAxisLabel: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'rangeaxislabel',
  })
  rangeAxisLabel: string | null;

  @Column('character varying', {
    nullable: false,
    length: 40,
    name: 'type',
  })
  type: string;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'series',
  })
  series: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'category',
  })
  category: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'hidelegend',
  })
  hideLegend: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'nospacebetweencolumns',
  })
  noSpaceBetweenColumns: boolean | null;

  @Column('character varying', {
    nullable: false,
    length: 40,
    name: 'regressiontype',
  })
  regressionType: string;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'title',
  })
  title: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'subtitle',
  })
  subtitle: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'hidetitle',
  })
  hideTitle: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'hidesubtitle',
  })
  hideSubtitle: boolean | null;

  @Column('double precision', {
    nullable: true,
    name: 'targetlinevalue',
  })
  targetLineValue: number | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'targetlinelabel',
  })
  targetLineLabel: string | null;

  @Column('double precision', {
    nullable: true,
    name: 'baselinevalue',
  })
  baselineValue: number | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'baselinelabel',
  })
  baseLineLabel: string | null;

  @Column('character varying', {
    nullable: true,
    length: 40,
    name: 'aggregationtype',
  })
  aggregationType: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'completedonly',
  })
  completedOnly: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'showdata',
  })
  showData: boolean | null;

  @Column('character varying', {
    nullable: true,
    length: 40,
    name: 'hideemptyrowitems',
  })
  hideEmptyRowItems: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'percentstackedvalues',
  })
  percentStackedValues: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'cumulativevalues',
  })
  cumulativeValues: boolean | null;

  @Column('double precision', {
    nullable: true,
    name: 'rangeaxismaxvalue',
  })
  rangeAxisMaxValue: number | null;

  @Column('double precision', {
    nullable: true,
    name: 'rangeaxisminvalue',
  })
  rangeAxisMinValue: number | null;

  @Column('integer', {
    nullable: true,
    name: 'rangeaxissteps',
  })
  rangeAxisSteps: number | null;

  @Column('integer', {
    nullable: true,
    name: 'rangeaxisdecimals',
  })
  rangeAxisDecimals: number | null;

  @Column('character varying', {
    nullable: true,
    length: 40,
    name: 'legenddisplaystrategy',
  })
  legendDisplayStrategy: string | null;

  @Column('integer', {
    nullable: true,
    name: 'sortorder',
  })
  sortOrder: number | null;

  @Column('boolean', { name: 'subscribed' })
  subscribed: boolean;

  @Column('boolean', { name: 'favorite' })
  favorite: boolean;

  @Column('integer', { name: 'toplimit' })
  toplimit: number;

  @Column('jsonb', { name: 'parentgraphmap' })
  parentgraphmap: any;

  @ManyToOne(
    () => User,
    (user: User) => user.charts,
  )
  @JoinColumn({ name: 'userid' })
  user: User | null;

  @OneToMany(
    () => ChartDimension,
    (chartDimension: ChartDimension) => chartDimension.chart, {eager: true}
  )
  chartDimensions: ChartDimension[];

  @OneToMany(
    () => DashboardItemChart,
    (dashboardItemChart: DashboardItemChart) => dashboardItemChart.chart, {eager: true}
  )
  dashboardItemCharts: DashboardItemChart[];
}
