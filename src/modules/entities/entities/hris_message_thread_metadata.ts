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

@Entity('messagethreadmetadata', { schema: 'public' })
@Index('idx_240580139d1c3019', ['participant'])
@Index('idx_24058013e2904019', ['thread'])
@Index('uniq_24058013539b0606', ['uid'], { unique: true })
export class MessageThreadMetadata {
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
    (MessageThread: MessageThread) => MessageThread.hrisMessageThreadMetadatas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'threadid' })
  thread: MessageThread | null;

  @ManyToOne(() => User, (User: User) => User.hrisMessageThreadMetadatas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'participantid' })
  participant: User | null;

  @Column('boolean', {
    nullable: false,
    name: 'is_deleted',
  })
  is_deleted: boolean;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'last_participant_message_date',
  })
  last_participant_message_date: Date | null;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'last_message_date',
  })
  last_message_date: Date | null;

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
}
