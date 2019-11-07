import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { ChartDimensionItem } from './chart-dimension-item.entity';
import { Chart } from '../chart/entities/chart.entity';
import { FavoriteDimension } from './favorite-dimension.entity';

@Entity('chartdimension', { schema: 'public' })
export class ChartDimension extends FavoriteDimension {
  @OneToMany(
    () => ChartDimensionItem,
    (chartDimensionItem: ChartDimensionItem) =>
      chartDimensionItem.chartDimension,
  )
  items: ChartDimensionItem[];

  @ManyToOne(() => Chart, (chart: Chart) => chart.chartDimensions)
  @JoinColumn({ name: 'chartid' })
  chart: Chart;
}
