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

@Entity('participants', { schema: 'public' })
export class Participants {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'username',
  })
  username: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'firstname',
  })
  firstname: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'middlename',
  })
  middlename: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'lastname',
  })
  lastname: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'currentjobresponsibility',
  })
  currentjobresponsibility: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'currentjobtitle',
  })
  currentjobtitle: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'qualificationandemployement',
  })
  qualificationandemployement: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'town',
  })
  town: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'district',
  })
  district: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'region',
  })
  region: string;
}
