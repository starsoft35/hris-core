import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Report } from './report.entity';

@Entity('reportgroup', { schema: 'public' })
export class ReportGroup extends EntityCoreProps {
  static plural = 'reportgroups';

  @PrimaryGeneratedColumn()
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'name',
  })
  name: string;

  @ManyToMany(
    type => Report,
    report => report.reportGroups,
    { nullable: false },
  )
  @JoinTable({name: 'reportgroupmembers'})
  reports: Report[];
}
