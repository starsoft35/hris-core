import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  BeforeInsert,
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
import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';

@Entity('systemuser', { schema: 'public' })
export class User extends UserCoreProps {
  static plural = 'users';

  @Column({ type: 'varchar', length: 255 })
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
  @ManyToMany(type => UserRole, userRole => userRole.users, {
    nullable: false,
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'userrolemembers',
    joinColumn: { referencedColumnName: 'uid' },
    inverseJoinColumn: { referencedColumnName: 'uid' },
  })
  userRoles: UserRole[];

  // User and User Group Relationship Many To Many
  @ManyToMany(type => UserGroup, userGroup => userGroup.users, {
    nullable: false,
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'usergroupmembers',
    joinColumn: { referencedColumnName: 'uid' },
    inverseJoinColumn: { referencedColumnName: 'uid' },
  })
  userGroups: UserGroup[];

  // @OneToMany(type => DashboardChart, dashboardChart => dashboardChart.user, {
  //   onDelete: 'CASCADE',
  // })
  // dashboardCharts: DashboardChart[];

  @ManyToMany(type => DashboardChart, dashboardChart => dashboardChart.user, {
    nullable: false,
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'userdashboardchartmembers',
  })
  dashboardCharts: DashboardChart[];

  // ! Deprecated
  // @OneToMany(type => Message, message => message.user, {
  //   onDelete: 'CASCADE',
  // })
  // messages: Message[];
  // ! Deprecated

  @ManyToMany(type => Message, message => message.user, {
    nullable: false,
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'usermessagemembers',
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

  // ! Deprecated
  // @OneToOne(type => UserSettings, userSettings => userSettings.user, {
  //   onDelete: 'CASCADE',
  // })
  // userSettings: UserSettings | null;
  // ! Deprecated

  @OneToOne(type => UserSettings, userSettings => userSettings.user, {
    nullable: false,
    eager: true,
    cascade: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usersettingsmembers' })
  userSettings: UserSettings;

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
