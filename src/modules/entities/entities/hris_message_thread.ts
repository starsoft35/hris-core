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
import { User } from './hris_user';
import { Message } from './hris_message';
import { MessageThreadMetadata } from './hris_message_thread_metadata';

@Entity('messagethread', { schema: 'public' })
@Index('idx_9dc9eac1f0b5af0b', ['createdby'])
@Index('uniq_9dc9eac1539b0606', ['uid'], { unique: true })
export class MessageThread {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @ManyToOne(() => User, (User: User) => User.hrisMessageThreads, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'createdbyid' })
  createdby: User | null;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'subject',
  })
  subject: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'createdat',
  })
  createdat: Date;

  @Column('boolean', {
    nullable: false,
    name: 'isspam',
  })
  isspam: boolean;

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

  @OneToMany(() => Message, (Message: Message) => Message.thread, {
    onDelete: 'CASCADE',
  })
  hrisMessages: Message[];

  @OneToMany(
    () => MessageThreadMetadata,
    (MessageThreadMetadata: MessageThreadMetadata) =>
      MessageThreadMetadata.thread,
    { onDelete: 'CASCADE' },
  )
  hrisMessageThreadMetadatas: MessageThreadMetadata[];
}
