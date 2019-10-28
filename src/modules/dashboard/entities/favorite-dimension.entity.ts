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
import { ReportTable } from './report-table.entity';

export class FavoriteDimension {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  dimension: string;

  @Column()
  layout: string;
}
