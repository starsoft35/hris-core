import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { MessageThread } from './message-thread.entity';
import { User } from '../../system/user/entities/user.entity';
import { EntityCoreProps } from '../../../core/entities/entity-core-props';

@Entity('messagethreadmetadata', { schema: 'public' })
export class MessageThreadMetadata extends EntityCoreProps {
  static plural = 'messageThreadMetadatas';

  @ManyToOne(
    type => MessageThread,
    messageThread => messageThread.messagethreadmetadatas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'threadid' })
  thread: MessageThread | null;

  @ManyToOne(type => User, user => user.messagethreadmetadatas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'participantid' })
  participant: User | null;

  @Column('boolean', {
    nullable: false,
    name: 'isdeleted',
  })
  isDeleted: boolean;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastparticipantmessagedate',
  })
  lastparticipantmessagedate: Date | null;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastmessagedate',
  })
  lastmessagedate: Date | null;
}
