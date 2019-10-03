import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { Message } from './message.entity';

@Entity('messagemetadata', { schema: 'public' })
export class MessageMetadata extends EntityCoreProps {
  static plural = 'messageMetadata';

  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'messagemetadataid',
  })
  id: number;

  @ManyToOne(type => Message, message => message.messageMetadatas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'messageid' })
  message: Message | null;

  @ManyToOne(type => User, user => user.messageMetadatas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'participantid' })
  participant: User | null;

  @Column('boolean', {
    nullable: false,
    name: 'isread',
  })
  isRead: boolean;
}
