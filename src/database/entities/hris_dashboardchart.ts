import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Field} from "./hris_field";
import { User} from "./user";
import { hris_organisationunit } from "./hris_organisationunit";
import {hris_form} from "./form";


@Entity('hris_dashboardchart', { schema: 'public' })
@Index(
  'userfieldonetwographtypelowerlevel_idx',
  ['fieldone_', 'fieldtwo_', 'graphtype', 'lowerlevels', 'user_'],
  { unique: true },
)
@Index('idx_34cd0e7e5a05b474', ['fieldone_'])
@Index('idx_34cd0e7e315953bb', ['fieldtwo_'])
@Index('uniq_34cd0e7e5e237e06', ['name'], { unique: true })
@Index('idx_34cd0e7ea76ed395', ['user_'])
export class hris_dashboardchart {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    type => Field,
    Field => Field.hris_dashboardcharts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldone_id' })
  fieldone_: Field | null;

  @ManyToOne(
    type => Field,
    Field => Field.hris_dashboardcharts2,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldtwo_id' })
  fieldtwo_: Field | null;

    @ManyToOne(type => User, User => User.hris_dashboardcharts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user_: User | null;

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

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'graphtype',
  })
  graphtype: string;

  @Column('boolean', {
    nullable: false,
    name: 'lowerlevels',
  })
  lowerlevels: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'systemwide',
  })
  systemwide: boolean;

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

  @ManyToMany(
    type => hris_organisationunit,
    hris_organisationunit => hris_organisationunit.hris_dashboardcharts,
    { nullable: false },
  )
  @JoinTable({ name: 'hris_dashboardchart_organisationunitmembers' })
  hris_organisationunits: hris_organisationunit[];

  @ManyToMany(type => hris_form, hris_form => hris_form.hris_dashboardcharts, {
    nullable: false,
  })
  @JoinTable({ name: 'hris_dashboardchart_formmembers' })
  hris_forms: hris_form[];
}
