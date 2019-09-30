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
import { ResourcetableFieldmembers } from './hris_resourcetable_fieldmembers';

@Entity('resourcetable', { schema: 'public' })
@Index('uniq_ed5a2275e237e06', ['name'], { unique: true })
@Index('uniq_ed5a227539b0606', ['uid'], { unique: true })
export class Resourcetable {
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

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'isgenerating',
  })
  isgenerating: boolean | null;

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

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastgenerated',
  })
  lastgenerated: Date | null;

  @Column('text', {
    nullable: true,
    name: 'messagelog',
  })
  messagelog: string | null;

  @OneToMany(
    () => ResourcetableFieldmembers,
    (ResourcetableFieldmembers: ResourcetableFieldmembers) =>
      ResourcetableFieldmembers.resourcetable,
    { onDelete: 'CASCADE' },
  )
  hrisResourcetableFieldmemberss: ResourcetableFieldmembers[];
}
