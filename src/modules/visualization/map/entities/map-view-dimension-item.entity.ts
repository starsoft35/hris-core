import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { FavoriteDimensionItem } from '../../dashboard/entities/favorite-dimension-item.entity';
import { MapViewDimension } from './map-view-dimension.entity';

@Entity('mapviewdimensionitem', { schema: 'public' })
export class MapViewDimensionItem extends FavoriteDimensionItem {
  @ManyToOne(
    () => MapViewDimension,
    (mapViewDimension: MapViewDimension) => mapViewDimension.items,
  )
  @JoinColumn({ name: 'mapviewdimensionid' })
  mapViewDimension: MapViewDimension;
}
