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
import { MessageThread } from './hris_message_thread';
import { User } from './hris_user';
import { MessageMetadata } from './hris_message_metadata';

@Entity('message', { schema: 'public' })
@Index('idx_b0cee96ae2904019', ['thread'])
@Index('uniq_b0cee96a539b0606', ['uid'], { unique: true })
@Index('idx_b0cee96aa76ed395', ['user'])
export class Message {
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

  @ManyToOne(
    () => MessageThread,
    (MessageThread: MessageThread) => MessageThread.hrisMessages,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'threadid' })
  thread: MessageThread | null;

  @ManyToOne(() => User, (User: User) => User.hrisMessages, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userid' })
  user: User | null;

  @Column('text', {
    nullable: false,
    name: 'body',
  })
  body: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'createdAt',
  })
  created_at: Date;

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

  @OneToMany(
    () => MessageMetadata,
    (MessageMetadata: MessageMetadata) => MessageMetadata.message,
    { onDelete: 'CASCADE' },
  )
  hrisMessageMetadatas: MessageMetadata[];
}
