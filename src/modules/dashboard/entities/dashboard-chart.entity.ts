import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

import { User } from '../../system/user/entities/user.entity';

@Entity('dashboardchart', { schema: 'public' })
export class DashboardChart extends EntityCoreProps {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(type => User, user => user.dashboardCharts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userid' })
  user: User | null;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'graphtype',
  })
  graphType: string;

  @Column('boolean', {
    nullable: false,
    name: 'lowerlevels',
  })
  lowerlevels: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'systemwide',
  })
  systemWide: boolean;

  @ManyToMany(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.dashboardCharts,
    { nullable: false },
  )
  @JoinTable({ name: 'dashboardchartorganisationunitmembers' })
  organisationUnits: OrganisationUnit[];
}
