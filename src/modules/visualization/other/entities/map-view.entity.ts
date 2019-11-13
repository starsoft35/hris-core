import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { MapViewDimension } from './map-view-dimension.entity';
import { Map } from '../../map/entities/map.entity';

@Entity('mapview', { schema: 'public' })
export class MapView extends EntityCoreProps {
  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'layer',
  })
  layer: string;

  @Column('character varying', {
    nullable: true,
    length: 40,
    name: 'aggregationtype',
  })
  aggregationType: string | null;

  @Column('timestamp without time zone', {
    nullable: true,
    name: 'startdate',
  })
  startDate: Date | null;

  @Column('timestamp without time zone', {
    nullable: true,
    name: 'enddate',
  })
  endDate: Date | null;

  @Column('boolean', {
    nullable: true,
    name: 'followup',
  })
  followUp: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'method',
  })
  method: number | null;

  @Column('integer', {
    nullable: true,
    name: 'classes',
  })
  classes: number | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'colorlow',
  })
  colorLow: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'colorhigh',
  })
  colorHigh: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'colorscale',
  })
  colorScale: string | null;

  //   @ManyToOne(
  //     () => maplegendset,
  //     (maplegendset: maplegendset) => maplegendset.mapviews,
  //     {},
  //   )
  //   @JoinColumn({ name: 'legendsetid' })
  //   legendset: maplegendset | null;

  @Column('integer', {
    nullable: true,
    name: 'radiuslow',
  })
  radiusLow: number | null;

  @Column('integer', {
    nullable: true,
    name: 'radiushigh',
  })
  radiusHigh: number | null;

  @Column('double precision', {
    nullable: true,
    name: 'opacity',
  })
  opacity: number | null;

  @Column('integer', {
    nullable: true,
    name: 'arearadius',
  })
  areaRadius: number | null;

  @Column('boolean', {
    nullable: true,
    name: 'hidden',
  })
  hidden: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'labels',
  })
  labels: boolean | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'labelfontsize',
  })
  labelFontSize: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'labelfontweight',
  })
  labelFontWeight: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'labelfontstyle',
  })
  labelFontStyle: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'labelfontcolor',
  })
  labelFontColor: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'eventclustering',
  })
  eventClustering: boolean | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'eventcoordinatefield',
  })
  eventCoordinateField: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'eventpointcolor',
  })
  eventPointColor: string | null;

  @Column('integer', {
    nullable: true,
    name: 'eventpointradius',
  })
  eventPointRadius: number | null;

  @Column('text', {
    nullable: true,
    name: 'config',
  })
  config: string | null;

  @Column('jsonb', {
    nullable: true,
    name: 'styledataitem',
  })
  styleDataItem: object | null;

  @OneToMany(
    () => MapViewDimension,
    (mapViewDimension: MapViewDimension) => mapViewDimension.mapView,
  )
  mapViewDimensions: MapViewDimension[];

  @ManyToOne(() => Map, (map: Map) => map.mapViews)
  map: Map;
}
