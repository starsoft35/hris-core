import { Organisationunit } from './hris_organisationunit';
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
import { Dashboardchart } from './hris_dashboardchart';
import { Form } from './hris_form';
import { MessageMetadata } from './hris_message_metadata';
import { MessageThreadMetadata } from './hris_message_thread_metadata';
import { MessageThread } from './hris_message_thread';
import { Message } from './hris_message';
import { UserGroup } from './hris_user_group';
import { UserRole } from './hris_user_role';
import { Usersettings } from './hris_usersettings';
import { UserIdentifiableObject } from './hris_user_identifiable_object';

@Entity('user', { schema: 'public' })
export class User extends UserIdentifiableObject {
  static plural = 'users';

  @PrimaryGeneratedColumn({
    name: 'userid',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    unique: true,
    length: 255,
    name: 'username',
  })
  username: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'email',
    unique: true,
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

  @OneToMany(type => Dashboardchart, dashboardChart => dashboardChart.user, {
    onDelete: 'CASCADE',
  })
  dashboardCharts: Dashboardchart[];

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

  @OneToMany(type => MessageThread, messageThread => messageThread.createdby, {
    onDelete: 'CASCADE',
  })
  messageThreads: MessageThread[];

  @OneToMany(
    type => MessageThreadMetadata,
    messageThreadMetadata => messageThreadMetadata.participant,
    { onDelete: 'CASCADE' },
  )
  messageThreadMetadatas: MessageThreadMetadata[];

  @OneToOne(type => Usersettings, userSettings => userSettings.user, {
    onDelete: 'CASCADE',
  })
  userSettings: Usersettings | null;

  @ManyToMany(type => Form, form => form.users, {
    nullable: false,
  })
  @JoinTable({ name: 'userformmembers' })
  forms: Form[];

  @ManyToMany(
    type => Organisationunit,
    organisationUnit => organisationUnit.users,
    { nullable: false },
  )
  @JoinTable({ name: 'organisationunitmembers' })
  organisationUnits: Organisationunit[];

  @ManyToMany(type => UserGroup, userGroup => userGroup.users, {
    nullable: false,
  })
  @JoinTable({ name: 'usergroupmembers' })
  userGroups: UserGroup[];

  @ManyToMany(type => UserRole, userRole => userRole.users, { nullable: false })
  @JoinTable({ name: 'userrolemembers' })
  userRoles: UserRole[];
    Usersettings: any;
  hrisForms: any;

  public static async authenticateUser(user: {
    username: string;
    password: string;
  }): Promise<User> {
    return this.authenticateUserByToken(
      User.getBase64(user.username, user.password),
    );
  }

  public static async authenticateUserByToken(token: string): Promise<User> {
    let u: User;
    u = await User.findOne({
      where: { token },
    });
    console.log('User:', u);
    if (u) {
      delete u.token;
      return u;
    }
  }
  static findOne(arg0: { where: { token: string; }; }): User | PromiseLike<User> {
    throw new Error("Method not implemented.");
  }

  public static getBase64(username, password) {
    return Buffer.from(username + ':' + password).toString('base64');
  }
  @BeforeInsert()
  createToken() {
    this.token = User.getBase64(this.username, this.password);
    this.enabled = true;
  }
}
