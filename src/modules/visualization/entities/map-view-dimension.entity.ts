import { Entity, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { FavoriteDimension } from './favorite-dimension.entity';
import { MapViewDimensionItem } from './map-view-dimension-item.entity';
import { MapView } from './map-view.entity';

@Entity('mapviewdimension', { schema: 'public' })
export class MapViewDimension extends FavoriteDimension {
  @OneToMany(
    () => MapViewDimensionItem,
    (mapViewDimensionItem: MapViewDimensionItem) =>
      mapViewDimensionItem.mapViewDimension,
  )
  items: MapViewDimensionItem[];

  @ManyToOne(() => MapView, (mapView: MapView) => mapView.mapViewDimensions)
  @JoinColumn({ name: 'mapviewid' })
  mapView: MapView;
}
