import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {MessageThread} from "./message-thread.entity";
import { User} from "../../user/entities/user.entity";


@Entity('messagethreadmetadata', { schema: 'public' })
export class MessageThreadMetadata {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    type => MessageThread,
    messageThread => messageThread.messageThreadMetadatas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'thread_id' })
  thread: MessageThread | null;

    @ManyToOne(type => User, user => user.messageThreadMetadatas, {
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
