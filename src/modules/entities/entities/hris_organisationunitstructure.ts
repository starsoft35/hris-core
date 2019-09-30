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
import { Organisationunit } from './hris_organisationunit';
import { Organisationunitlevel } from './hris_organisationunitlevel';

@Entity('organisationunitstructure', { schema: 'public' })
@Index('idx_f820ce269e81aa93', ['level2'])
@Index('idx_f820ce268c34057d', ['level3'])
@Index('idx_f820ce2634886218', ['level4'])
@Index('idx_f820ce26a95f5aa1', ['level5'])
@Index('idx_f820ce2611e33dc4', ['level6'])
@Index('idx_f820ce26356922a', ['level7'])
@Index('idx_f820ce265fb14ba7', ['level'])
@Index('uniq_f820ce2683954d93', ['organisationunit'], { unique: true })
@Index('uniq_f820ce26539b0606', ['uid'], { unique: true })
export class Organisationunitstructure {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @OneToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisOrganisationunitstructure,
    { nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationunit: Organisationunit | null;

  @ManyToOne(
    () => Organisationunitlevel,
    (Organisationunitlevel: Organisationunitlevel) =>
      Organisationunitlevel.hrisOrganisationunitstructures,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'levelid' })
  level: Organisationunitlevel | null;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisOrganisationunitstructures,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'level1id' })
  level2: Organisationunit | null;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisOrganisationunitstructures2,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'level2id' })
  level3: Organisationunit | null;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisOrganisationunitstructures3,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'level3id' })
  level4: Organisationunit | null;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisOrganisationunitstructures4,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'level4id' })
  level5: Organisationunit | null;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisOrganisationunitstructures5,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'level5id' })
  level6: Organisationunit | null;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisOrganisationunitstructures6,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'level6id' })
  level7: Organisationunit | null;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

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
}
