import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('report', { schema: 'public' })
export class Report extends EntityCoreProps {
  static plural = 'reports';

  @PrimaryGeneratedColumn()
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'uri',
  })
  uri: string;

  @Column('text', {
    nullable: false,
    name: 'parameters',
  })
  parameters: string;

  @Column('character varying', {
    nullable: true,
    length: 11,
    default: () => 'NULL::character varying',
    name: 'uid',
  })
  dhisuid: string | null;

  @Column('character varying', {
    nullable: true,
    name: 'name',
  })
  active: boolean | null;

  @Column('date', {
    nullable: true,
    name: 'created',
  })
  openingDate: string | null;

  @Column('date', {
    nullable: true,
    name: 'lastupdated',
  })
  lastupdated: string | null;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'createdby',
  })
  createdby: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'userid',
  })
  userid: number;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'lastupdatedby',
  })
  lastupdatedby: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'publicaccess',
  })
  publicAccesscess: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'externalaccess',
  })
  externalAccess: boolean;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'description',
  })
  description: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'code',
  })
  code: string;
}
