import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { User } from '../../../modules/system/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { DashboardItemReportTable } from '../../other/entities/dashboard-item-report-table.entity';
import { ReportTableDimension } from '../../other/entities/report-table-dimension.entity';

@Entity('reporttable', { schema: 'public' })
export class ReportTable extends EntityCoreProps {
  static plural = 'reportTables';
  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'measurecriteria',
  })
  measureCriteria: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'regression',
  })
  regression: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'cumulative',
  })
  cumulative: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'sortorder',
  })
  sortOrder: number | null;

  @Column('integer', {
    nullable: true,
    name: 'toplimit',
  })
  topLimit: number | null;

  @Column('boolean', {
    nullable: true,
    name: 'rowtotals',
  })
  rowTotals: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'coltotals',
  })
  colTotals: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'rowsubtotals',
  })
  rowSubTotals: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'colsubtotals',
  })
  colSubTotals: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'hideemptyrows',
  })
  hideEmptyRows: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'hideemptycolumns',
  })
  hideEmptyColumns: boolean | null;

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

  @Column('character varying', {
    nullable: true,
    length: 40,
    name: 'digitgroupseparator',
  })
  digitGroupSeparator: string | null;

  @Column('character varying', {
    nullable: true,
    length: 40,
    name: 'displaydensity',
  })
  displayDensity: string | null;

  @Column('character varying', {
    nullable: true,
    length: 40,
    name: 'fontsize',
  })
  fontSize: string | null;

  //   @ManyToOne(
  //     () => maplegendset,
  //     (maplegendset: maplegendset) => maplegendset.reporttables,
  //     {},
  //   )
  //   @JoinColumn({ name: 'legendsetid' })
  //   legendset: maplegendset | null;

  @Column('character varying', {
    nullable: true,
    length: 40,
    name: 'legenddisplaystyle',
  })
  legendDisplayStyle: string | null;

  @Column('character varying', {
    nullable: true,
    length: 40,
    name: 'legenddisplaystrategy',
  })
  legendDisplayStrategy: string | null;

  @Column('character varying', {
    nullable: true,
    length: 40,
    name: 'numbertype',
  })
  numberType: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'showhierarchy',
  })
  showHierarchy: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'showdimensionlabels',
  })
  showDimensionLabels: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'skiprounding',
  })
  skipRounding: boolean | null;

  @OneToMany(
    () => DashboardItemReportTable,
    (dashboardItemReportTable: DashboardItemReportTable) =>
      dashboardItemReportTable.reportTable,
  )
  dashboardItemReportTables: DashboardItemReportTable[];

  @OneToMany(
    () => ReportTableDimension,
    (reportTableDimension: ReportTableDimension) =>
      reportTableDimension.reportTable,
  )
  reportTableDimensions: ReportTableDimension[];

  @ManyToOne(() => User, (user: User) => user.charts)
  @JoinColumn({ name: 'userid' })
  user: User | null;
}
