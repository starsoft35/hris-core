import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Organisationunitstructure } from './hris_organisationunitstructure';

@Entity('organisationunitlevel', { schema: 'public' })
@Index('uniq_8ba61e379aeacc13', ['level'], { unique: true })
@Index('uniq_8ba61e375e237e06', ['name'], { unique: true })
@Index('uniq_8ba61e37539b0606', ['uid'], { unique: true })
export class Organisationunitlevel {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('integer', {
    nullable: false,
    name: 'level',
  })
  level: number;

  @Column('character varying', {
    nullable: false,
    length: 128,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('boolean', {
    nullable: false,
    name: 'dataentrylevel',
  })
  dataentrylevel: boolean;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'datecreated',
  })
  datecreated: Date;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastupdated',
  })
  lastupdated: Date | null;

  @OneToMany(
    () => Organisationunitstructure,
    (Organisationunitstructure: Organisationunitstructure) =>
      Organisationunitstructure.level,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunitstructures: Organisationunitstructure[];
}
