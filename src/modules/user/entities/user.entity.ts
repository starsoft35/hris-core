import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  BaseEntity,
} from 'typeorm';

import { hris_form } from '../../../database/entities/form';
import { hris_dashboardchart } from '../../../database/entities/hris_dashboardchart';
import { hris_message } from '../../../database/entities/hris_message';
import { hris_message_metadata } from '../../../database/entities/hris_message_metadata';
import { hris_message_thread } from '../../../database/entities/hris_message_thread';
import { hris_message_thread_metadata } from '../../../database/entities/hris_message_thread_metadata';
import { UserGroup } from './user-group.entity';
import { UserSettings } from './user-settings.entity';
import { UserRole } from './user-role.entity';

@Entity('user', { schema: 'public' })
export class User extends BaseEntity{
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'userid',
  })
  id: number;

  // @ManyToOne(type=>hris_organisationunit, hris_organisationunit=>hris_organisationunit.hris_users,{ onDelete: 'CASCADE', })
  // @JoinColumn({ name:'organisationunit_id'})
  // organisationunit_:hris_organisationunit | null;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'username',
  })
  username: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'username_canonical',
  })
  username_canonical: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'email',
  })
  email: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'email_canonical',
  })
  email_canonical: string;

  @Column('boolean', {
    nullable: false,
    name: 'enabled',
  })
  enabled: boolean;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'salt',
  })
  salt: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'password',
  })
  password: string;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'last_login',
  })
  last_login: Date | null;

  @Column('boolean', {
    nullable: false,
    name: 'locked',
  })
  locked: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'expired',
  })
  expired: boolean;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'expires_at',
  })
  expires_at: Date | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'confirmation_token',
  })
  confirmation_token: string | null;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'password_requested_at',
  })
  password_requested_at: Date | null;

  @Column('text', {
    nullable: false,
    name: 'roles',
  })
  roles: string;

  @Column('boolean', {
    nullable: false,
    name: 'credentials_expired',
  })
  credentials_expired: boolean;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'credentials_expire_at',
  })
  credentials_expire_at: Date | null;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'phonenumber',
  })
  phonenumber: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'jobtitle',
  })
  jobtitle: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'firstname',
  })
  firstname: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'middlename',
  })
  middlename: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'surname',
  })
  surname: string | null;

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

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'deletedat',
  })
  deletedat: Date | null;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @OneToMany(
    type => hris_dashboardchart,
    hris_dashboardchart => hris_dashboardchart.user_,
    { onDelete: 'CASCADE' },
  )
  hris_dashboardcharts: hris_dashboardchart[];

  @OneToMany(type => hris_message, hris_message => hris_message.user_, {
    onDelete: 'CASCADE',
  })
  hris_messages: hris_message[];

  @OneToMany(
    type => hris_message_metadata,
    hris_message_metadata => hris_message_metadata.participant_,
    { onDelete: 'CASCADE' },
  )
  hris_message_metadatas: hris_message_metadata[];

  @OneToMany(
    type => hris_message_thread,
    hris_message_thread => hris_message_thread.createdby_,
    { onDelete: 'CASCADE' },
  )
  hris_message_threads: hris_message_thread[];

  @OneToMany(
    type => hris_message_thread_metadata,
    hris_message_thread_metadata => hris_message_thread_metadata.participant_,
    { onDelete: 'CASCADE' },
  )
  hris_message_thread_metadatas: hris_message_thread_metadata[];

  @OneToOne(
    type => UserSettings,
    userSettings => userSettings.user,
    { onDelete: 'CASCADE' },
  )
  userSettings: UserSettings | null;

  @ManyToMany(type => hris_form, hris_form => hris_form.hris_users, {
    nullable: false,
  })
  @JoinTable({ name: 'hris_user_formmembers' })
  hris_forms: hris_form[];

  @ManyToMany(
    type => UserGroup,
    userGroup => userGroup.users,
    { nullable: false },
  )
  @JoinTable({ name: 'usergroupmembers' })
  userGroups: UserGroup[];

  @ManyToMany(
    type => UserRole,
    userRole => userRole.users,
    { nullable: false },
  )
  @JoinTable({ name: 'userrolemembers' })
  userRoles: UserRole[];
}
