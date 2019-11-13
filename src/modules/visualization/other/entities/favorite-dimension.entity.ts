import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class FavoriteDimension {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  dimension: string;

  @Column()
  layout: string;
}
