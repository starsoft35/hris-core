import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  BaseEntity,
  ManyToOne,
} from 'typeorm';

import { Form } from '../../form/entities/form.entity';
import { DashboardChart } from '../../dashboard/entities/dashboard-chart.entity';
import { Message } from '../../message/entities/message.entity';
import { MessageMetadata } from '../../message/entities/message-metadata.entity';
import { MessageThread } from '../../message/entities/message-thread.entity';
import { MessageThreadMetadata } from '../../message/entities/message-thread-metadata.entity';
import { UserGroup } from './user-group.entity';
import { UserSettings } from './user-settings.entity';
import { UserRole } from './user-role.entity';
import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';

@Entity('user', { schema: 'public' })
export class User extends BaseEntity{
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'userid',
  })
  id: number;

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
    type => DashboardChart,
    hris_dashboardchart => hris_dashboardchart.user_,
    { onDelete: 'CASCADE' },
  )
  dashboardCharts: DashboardChart[];

  @OneToMany(type => Message, message => message.user, {
    onDelete: 'CASCADE',
  })
  messages: Message[];

  @OneToMany(
    type => MessageMetadata,
    messageMetadata => messageMetadata.participant,
    { onDelete: 'CASCADE' },
  )
  messageMetadatas: MessageMetadata[];

  @OneToMany(
    type => MessageThread,
    messageThread => messageThread.createdBy,
    { onDelete: 'CASCADE' },
  )
  messageThreads: MessageThread[];

  @OneToMany(
    type => MessageThreadMetadata,
    messageThreadMetadata => messageThreadMetadata.participant,
    { onDelete: 'CASCADE' },
  )
  messageThreadMetadatas: MessageThreadMetadata[];

  @OneToOne(
    type => UserSettings,
    userSettings => userSettings.user,
    { onDelete: 'CASCADE' },
  )
  userSettings: UserSettings | null;

  @ManyToMany(type => Form, form => form.users, {
    nullable: false,
  })
  @JoinTable({ name: 'hris_user_formmembers' })
  forms: Form[];

  @ManyToMany(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.users,
    { nullable: false },
  )
  @JoinTable({ name: 'organisationunitmembers' })
  organisationUnits: OrganisationUnit[];

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
