import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { FavoriteDimensionItem } from './favorite-dimension-item.entity';
import { Chart } from './chart.entity';

@Entity('favoritedimension', { schema: 'public' })
export class FavoriteDimension {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  dimension: string;

  @Column()
  layout: string;

  @OneToMany(
    () => FavoriteDimensionItem,
    (favoriteDimensionItem: FavoriteDimensionItem) =>
      favoriteDimensionItem.favoriteDimension,
  )
  items: FavoriteDimensionItem[];

  @ManyToOne(() => Chart, (chart: Chart) => chart.favoriteDimensions)
  @JoinColumn({ name: 'chartid' })
  chart: Chart;
}
