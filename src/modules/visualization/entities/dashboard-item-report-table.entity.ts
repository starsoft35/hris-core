import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { DashboardItem } from '../dashboard-item/entities/dashboard-item.entity';
import { ReportTable } from '../report-table/entities/report-table.entity';

@Entity('dashboarditemreporttable', { schema: 'public' })
export class DashboardItemReportTable {
  @ManyToOne(
    () => DashboardItem,
    (dashboardItem: DashboardItem) => dashboardItem.dashboardItemReportTables,
    { primary: true },
  )
  @JoinColumn({ name: 'dashboarditemid' })
  dashboardItem: DashboardItem;

  @ManyToOne(
    () => ReportTable,
    (reportTable: ReportTable) => reportTable.dashboardItemReportTables,
  )
  @JoinColumn({ name: 'reporttableid' })
  reportTable: ReportTable;
}
