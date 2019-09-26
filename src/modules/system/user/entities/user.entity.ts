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
  JoinColumn,
} from 'typeorm';
import { DashboardChart } from '../../../dashboard/entities/dashboard-chart.entity';
import { Form } from '../../../form/entities/form.entity';
import { MessageMetadata } from '../../../message/entities/message-metadata.entity';
import { MessageThreadMetadata } from '../../../message/entities/message-thread-metadata.entity';
import { MessageThread } from '../../../message/entities/message-thread.entity';
import { Message } from '../../../message/entities/message.entity';
import { UserGroup } from '../../user-group/entities/user-group.entity';
import { UserRole } from '../../user-role/entities/user-role.entity';
import { UserSettings } from './user-settings.entity';
import { UserCoreProps } from 'src/core/entities/user-core-props.entity';

@Entity('user', { schema: 'public' })
export class User extends UserCoreProps {
  static plural = 'users';

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, length: 255 })
  username: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  firstname: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  middlename: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  surname: string | null;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  password: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  phonenumber: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  jobtitle: string | null;

  @Column({
    type: 'timestamp without time zone',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  lastlogin: Date | null;

  @Column({
    type: 'timestamp without time zone',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  expirydate: Date | null;

  @Column({
    type: 'timestamp without time zone',
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
  })
  deleteddate: Date | null;

  @Column({ type: 'boolean', nullable: false })
  enabled: boolean;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 255,
    default: () => 'NULL::varchar',
  })
  token: string | null;

  @JoinColumn({ name: 'createdbyid' })
  createdby: User;

  @JoinColumn({ name: 'lastupdatedbyid' })
  lastupdatedby: User;

  // User & User Role Relationship: Many To Many Relationship
  @ManyToMany(type => UserRole, userRole => userRole.users, { nullable: false })
  @JoinTable({ name: 'userrolemembers' })
  userRoles: UserRole[];

  // User Relations
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
    if (u) {
      delete u.token;
      return u;
    }
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
