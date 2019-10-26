import {
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

import { FavoriteDimension } from './favorite-dimension.entity';

@Entity('favoritedimensionitem', { schema: 'public' })
export class FavoriteDimensionItem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 11, name: 'dimensionitem' })
  dimensionItem: string;

  @Column({ type: 'varchar', length: 50, name: 'dimensionitemtype' })
  dimensionItemType: string;

  @ManyToOne(
    () => FavoriteDimension,
    (favoriteDimension: FavoriteDimension) => favoriteDimension.items,
  )
  @JoinColumn({ name: 'favoritedimensionid' })
  favoriteDimension: FavoriteDimension;
}
