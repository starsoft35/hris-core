import { Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { FavoriteDimension } from './favorite-dimension.entity';
import { ReportTable } from './report-table.entity';
import { ReportTableDimensionItem } from './report-table-dimension-item.entity';

@Entity('reporttabledimension', { schema: 'public' })
export class ReportTableDimension extends FavoriteDimension {
  @OneToMany(
    () => ReportTableDimensionItem,
    (reportTableDimensionItem: ReportTableDimensionItem) =>
      reportTableDimensionItem.reportTableDimension,
  )
  items: ReportTableDimensionItem[];

  @ManyToOne(
    () => ReportTable,
    (reportTable: ReportTable) => reportTable.reportTableDimensions,
  )
  @JoinColumn({ name: 'reporttableid' })
  reportTable: ReportTable;
}
