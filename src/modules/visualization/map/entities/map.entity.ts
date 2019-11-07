import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { User } from 'src/modules/system/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { DashboardItemMap } from '../../entities/dashboard-item-map.entity';
import { MapView } from '../../entities/map-view.entity';

@Entity('map', { schema: 'public' })
export class Map extends EntityCoreProps {
  static plural = 'maps';
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
