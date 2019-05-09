import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

import { Form } from '../../form/entities/form.entity';
import { Field } from '../../form/entities/field.entity';
import { User } from '../../user/entities/user.entity';

@Entity('dashboardchart', { schema: 'public' })
export class DashboardChart {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(type => User, user => user.dashboardCharts, {
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

  // @ManyToMany(
  //   type => hris_organisationunit,
  //   hris_organisationunit => hris_organisationunit.hris_dashboardcharts,
  //   { nullable: false },
  // )
  // @JoinTable({ name: 'hris_dashboardchart_organisationunitmembers' })
  // hris_organisationunits: hris_organisationunit[];
}
