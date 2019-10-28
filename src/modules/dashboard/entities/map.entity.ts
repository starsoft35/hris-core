import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { User } from 'src/modules/system/user/entities/user.entity';
import { DashboardItem } from './dashboard-item.entity';
import { MapView } from './map-view.entity';
import { DashboardItemMap } from './dashboard-item-map.entity';

@Entity('map', { schema: 'public' })
export class Map extends EntityCoreProps {
  @Column('double precision', {
    nullable: true,
    name: 'longitude',
  })
  longitude: number | null;

  @Column('double precision', {
    nullable: true,
    name: 'latitude',
  })
  latitude: number | null;

  @Column('integer', {
    nullable: true,
    name: 'zoom',
  })
  zoom: number | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'basemap',
  })
  baseMap: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'title',
  })
  title: string | null;

  @ManyToOne(() => User, (user: User) => user.maps)
  @JoinColumn({ name: 'userid' })
  user: User | null;

  @OneToMany(
    () => DashboardItemMap,
    (dashboardItemMap: DashboardItemMap) => dashboardItemMap.map,
  )
  dashboardItemMaps: DashboardItemMap[];

  @OneToMany(() => MapView, (mapView: MapView) => mapView.map)
  mapViews: MapView[];
}
