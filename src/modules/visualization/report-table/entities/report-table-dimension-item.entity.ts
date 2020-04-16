import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { FavoriteDimensionItem } from '../../dashboard/entities/favorite-dimension-item.entity';
import { ReportTableDimension } from './report-table-dimension.entity';

@Entity('reporttabledimensionitem', { schema: 'public' })
export class ReportTableDimensionItem extends FavoriteDimensionItem {
  @ManyToOne(
    () => ReportTableDimension,
    (reportTableDimension: ReportTableDimension) => reportTableDimension.items,
  )
  @JoinColumn({ name: 'reporttabledimensionid' })
  reportTableDimension: ReportTableDimension;
}
