import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { User } from './user';


@Entity('hris_usersettings', { schema: 'public' })
@Index('uniq_3ab1c0dc539b0606', ['uid'], { unique: true })
@Index('unique_usersettings_idx', ['user_'], { unique: true })
export class hris_usersettings {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

    @OneToOne(type => User, User => User.hris_usersettings, {
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

  @Column('boolean', {
    nullable: false,
    name: 'emailnotification',
  })
  emailnotification: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'smsnotification',
  })
  smsnotification: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'completenessalert',
  })
  completenessalert: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'qualitycheckalert',
  })
  qualitycheckalert: boolean;

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
