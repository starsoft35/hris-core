import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class FavoriteDimensionItem {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 11, name: 'dimensionitem' })
  dimensionItem: string;

  @Column({ type: 'varchar', length: 50, name: 'dimensionitemtype' })
  dimensionItemType: string;
}
