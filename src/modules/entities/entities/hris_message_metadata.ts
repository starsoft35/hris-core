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
import { Message } from './hris_message';
import { User } from './hris_user';

@Entity('messagemetadata', { schema: 'public' })
@Index('idx_b2eeb3a7537a1329', ['message'])
@Index('idx_b2eeb3a79d1c3019', ['participant'])
@Index('uniq_b2eeb3a7539b0606', ['uid'], { unique: true })
export class MessageMetadata {
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
    () => Message,
    (Message: Message) => Message.hrisMessageMetadatas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'messageid' })
  message: Message | null;

  @ManyToOne(() => User, (User: User) => User.hrisMessageMetadatas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'participantid' })
  participant: User | null;

  @Column('boolean', {
    nullable: false,
    name: 'is_read',
  })
  is_read: boolean;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;
}
