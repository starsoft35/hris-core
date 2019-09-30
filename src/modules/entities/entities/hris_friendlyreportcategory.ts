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
import { Friendlyreport } from './hris_friendlyreport';
import { Fieldoptiongroup } from './hris_fieldoptiongroup';

@Entity('friendlyreportcategory', { schema: 'public' })
@Index('idx_9016a10da1a91b38', ['fieldoptiongroup'])
@Index('idx_9016a10d5bc2af53', ['friendlyreport'])
export class Friendlyreportcategory {
  @ManyToOne(
    () => Friendlyreport,
    (Friendlyreport: Friendlyreport) =>
      Friendlyreport.hrisFriendlyreportcategorys,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'friendlyreport_id' })
  friendlyreport: Friendlyreport | null;

  @ManyToOne(
    () => Fieldoptiongroup,
    (Fieldoptiongroup: Fieldoptiongroup) =>
      Fieldoptiongroup.hrisFriendlyreportcategorys,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldoptiongroup_id' })
  fieldoptiongroup: Fieldoptiongroup | null;

  @Column('integer', {
    nullable: false,
    name: 'sort',
  })
  sort: number;
}
