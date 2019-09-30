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
import { Field } from './hris_field';
import { Friendlyreport } from './hris_friendlyreport';
import { Friendlyreportcategory } from './hris_friendlyreportcategory';
import { IntergrationDhisDataelementfieldoptionrelation } from './hris_intergration_dhis_dataelementfieldoptionrelation';
import { Fieldoption } from './hris_fieldoption';
import { Fieldoptiongroupset } from './hris_fieldoptiongroupset';

@Entity('fieldoptiongroup', { schema: 'public' })
@Index('idx_42f4445f443707b0', ['field'])
@Index('uniq_42f4445f5e237e06', ['name'], { unique: true })
@Index('uniq_42f4445f539b0606', ['uid'], { unique: true })
export class Fieldoptiongroup {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisFieldoptiongroups,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

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

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'operator',
  })
  operator: string | null;

  @OneToMany(
    () => Friendlyreport,
    (Friendlyreport: Friendlyreport) => Friendlyreport.series,
    { onDelete: 'CASCADE' },
  )
  hrisFriendlyreports: Friendlyreport[];

  @OneToMany(
    () => Friendlyreportcategory,
    (Friendlyreportcategory: Friendlyreportcategory) =>
      Friendlyreportcategory.fieldoptiongroup,
    { onDelete: 'CASCADE' },
  )
  hrisFriendlyreportcategorys: Friendlyreportcategory[];

  @OneToMany(
    () => IntergrationDhisDataelementfieldoptionrelation,
    (
      IntergrationDhisDataelementfieldoptionrelation: IntergrationDhisDataelementfieldoptionrelation,
    ) => IntergrationDhisDataelementfieldoptionrelation.columnFieldoptionGroup,
    { onDelete: 'CASCADE' },
  )
  hrisIntergrationDhisDataelementfieldoptionrelations: IntergrationDhisDataelementfieldoptionrelation[];

  @OneToMany(
    () => IntergrationDhisDataelementfieldoptionrelation,
    (
      IntergrationDhisDataelementfieldoptionrelation: IntergrationDhisDataelementfieldoptionrelation,
    ) => IntergrationDhisDataelementfieldoptionrelation.rowFieldoptionGroup,
    { onDelete: 'CASCADE' },
  )
  hrisIntergrationDhisDataelementfieldoptionrelations2: IntergrationDhisDataelementfieldoptionrelation[];

  @ManyToMany(
    () => Fieldoption,
    (Fieldoption: Fieldoption) => Fieldoption.hrisFieldoptiongroups,
    { nullable: false },
  )
  @JoinTable({ name: 'fieldoptiongroup_members' })
  hrisFieldoptions: Fieldoption[];

  @ManyToMany(
    () => Fieldoptiongroupset,
    (Fieldoptiongroupset: Fieldoptiongroupset) =>
      Fieldoptiongroupset.hrisFieldoptiongroups,
  )
  hrisFieldoptiongroupsets: Fieldoptiongroupset[];
}
