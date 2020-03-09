import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Report } from './report.entity';

@Entity('reportGroup', { schema: 'public' })
export class ReportGroup extends EntityCoreProps {
  static plural = 'reportGroups';

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
  @JoinTable({})
  reports: Report[];
}
