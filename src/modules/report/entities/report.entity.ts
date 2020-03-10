import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { ReportGroup } from './report.group.entity';

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

  @Column('json', {
    nullable: false,
    name: 'parameters',
  })
  parameters: any;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'type',
  })
  type: string;

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
    name: 'publicaccess',
  })
  publicAccess: string;

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

  @Column('character varying', {
    nullable: false,
    length: 255,
  })
  html: string;

  @ManyToMany(
    type => ReportGroup,
    reportGroup => reportGroup.reports,
  )
  reportGroups: ReportGroup[];
}
