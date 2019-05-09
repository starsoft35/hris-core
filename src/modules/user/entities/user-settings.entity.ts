import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { User } from './user.entity';


@Entity('usersettings', { schema: 'public' })
export class UserSettings {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'usersettingsid',
  })
  id: number;

  @OneToOne(type => User, User => User.userSettings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userid' })
  user: User | null;

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
