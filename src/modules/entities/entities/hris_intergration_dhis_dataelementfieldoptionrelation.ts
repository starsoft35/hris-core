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
import { IntergrationDhisDataconnection } from './hris_intergration_dhis_dataconnection';
import { Fieldoptiongroup } from './hris_fieldoptiongroup';

@Entity('intergrationdhisdataelementfieldoptionrelation', {
  schema: 'public',
})
@Index(
  'unique_dhisdataelement_idx',
  ['categorycombouid', 'dataelementuid', 'dhisDataConnection'],
  { unique: true },
)
@Index(
  'unique_hrfieldoptiongroups_idx',
  ['columnFieldoptionGroup', 'dhisDataConnection', 'rowFieldoptionGroup'],
  { unique: true },
)
@Index('idx_6902021b1bd8199f', ['columnFieldoptionGroup'])
@Index('idx_6902021bb17756c2', ['dhisDataConnection'])
@Index('idx_6902021bceff300e', ['rowFieldoptionGroup'])
export class IntergrationDhisDataelementfieldoptionrelation {
  @ManyToOne(
    () => IntergrationDhisDataconnection,
    (
      IntergrationDhisDataconnection: IntergrationDhisDataconnection,
    ) =>
      IntergrationDhisDataconnection.hrisIntergrationDhisDataelementfieldoptionrelations,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'dhisdataconnectionid' })
  dhisDataConnection: IntergrationDhisDataconnection | null;

  @ManyToOne(
    () => Fieldoptiongroup,
    (Fieldoptiongroup: Fieldoptiongroup) =>
      Fieldoptiongroup.hrisIntergrationDhisDataelementfieldoptionrelations,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'columnfieldoptiongroupid' })
  columnFieldoptionGroup: Fieldoptiongroup | null;

  @ManyToOne(
    () => Fieldoptiongroup,
    (Fieldoptiongroup: Fieldoptiongroup) =>
      Fieldoptiongroup.hrisIntergrationDhisDataelementfieldoptionrelations2,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'rowfieldoptiongroupid' })
  rowFieldoptionGroup: Fieldoptiongroup | null;

  @Column('character varying', {
    nullable: false,
    primary: true,
    length: 16,
    name: 'dataelementuid',
  })
  dataelementuid: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'dataelementname',
  })
  dataelementname: string;

  @Column('character varying', {
    nullable: false,
    primary: true,
    length: 16,
    name: 'categorycombouid',
  })
  categorycombouid: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'categorycomboname',
  })
  categorycomboname: string;
}
