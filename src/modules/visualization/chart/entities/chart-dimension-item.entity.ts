import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { ChartDimension } from './chart-dimension.entity';
import { FavoriteDimensionItem } from '../../dashboard/entities/favorite-dimension-item.entity';

@Entity('chartdimensionitem', { schema: 'public' })
export class ChartDimensionItem extends FavoriteDimensionItem {
  @ManyToOne(
    () => ChartDimension,
    (chartDimension: ChartDimension) => chartDimension.items,
  )
  @JoinColumn({ name: 'chartdimensionid' })
  chartDimension: ChartDimension;
}
