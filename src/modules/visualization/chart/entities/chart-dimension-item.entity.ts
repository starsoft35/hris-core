import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ChartDimension } from './chart-dimension.entity';
import { FavoriteDimensionItem } from '../../dashboard/entities/favorite-dimension-item.entity';

@Entity('chartdimensionitem', { schema: 'public' })
export class ChartDimensionItem extends FavoriteDimensionItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column()
  displayname: string;
  @ManyToOne(
    () => ChartDimension,
    (chartDimension: ChartDimension) => chartDimension.items,
  )
  @JoinColumn({ name: 'chartdimensionid' })
  chartDimension: ChartDimension;
}
