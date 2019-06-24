import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  BeforeInsert,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { createHmac } from 'crypto';
import { DashboardChart } from '../../dashboard/entities/dashboard-chart.entity';
import { Form } from '../../form/entities/form.entity';
import { MessageMetadata } from '../../message/entities/message-metadata.entity';
import { MessageThreadMetadata } from '../../message/entities/message-thread-metadata.entity';
import { MessageThread } from '../../message/entities/message-thread.entity';
import { Message } from '../../message/entities/message.entity';
import { UserGroup } from './user-group.entity';
import { UserRole } from './user-role.entity';
import { UserSettings } from './user-settings.entity';
import { UserIdentifiableObject } from './user-identifiable-object';

@Entity('user', { schema: 'public' })
export class User extends UserIdentifiableObject {

  static plural = 'users';
  
  @PrimaryGeneratedColumn({
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
    name: 'email',
  })
  email: string;

  @Column('boolean', {
    nullable: false,
    name: 'enabled',
  })
  enabled: boolean;

  password: string;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastlogin',
  })
  lastLogin: Date | null;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'expirydate',
  })
  expirydate: Date | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'token',
  })
  token: string | null;

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
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'deletedat',
  })
  deletedat: Date | null;

  @OneToMany(type => DashboardChart, dashboardChart => dashboardChart.user, {
    onDelete: 'CASCADE',
  })
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

  @OneToMany(type => MessageThread, messageThread => messageThread.createdBy, {
    onDelete: 'CASCADE',
  })
  messageThreads: MessageThread[];

  @OneToMany(
    type => MessageThreadMetadata,
    messageThreadMetadata => messageThreadMetadata.participant,
    { onDelete: 'CASCADE' },
  )
  messageThreadMetadatas: MessageThreadMetadata[];

  @OneToOne(type => UserSettings, userSettings => userSettings.user, {
    onDelete: 'CASCADE',
  })
  userSettings: UserSettings | null;

  @ManyToMany(type => Form, form => form.users, {
    nullable: false,
  })
  @JoinTable({ name: 'userformmembers' })
  forms: Form[];

  @ManyToMany(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.users,
    { nullable: false },
  )
  @JoinTable({ name: 'organisationunitmembers' })
  organisationUnits: OrganisationUnit[];

  @ManyToMany(type => UserGroup, userGroup => userGroup.users, {
    nullable: false,
  })
  @JoinTable({ name: 'usergroupmembers' })
  userGroups: UserGroup[];

  @ManyToMany(type => UserRole, userRole => userRole.users, { nullable: false })
  @JoinTable({ name: 'userrolemembers' })
  userRoles: UserRole[];

  public static async authenticateUser(user: { username: string, password: string }): Promise<User> {
    return this.authenticateUserByToken(User.getBase64(user.username, user.password));
  }

  public static async authenticateUserByToken(token: string): Promise<User> {
    let u: User;
    u = await User.findOne({
      where: { token: token }
    });
    console.log('User:', u);
    if (u) {
      delete u.token;
      return u;
    }
  }

  public static getBase64(username, password) {
    return Buffer.from(username + ":" + password).toString('base64')
  }
  @BeforeInsert()
  createToken(){
    this.token = User.getBase64(this.username, this.password);
    this.enabled = true;
  }
}
