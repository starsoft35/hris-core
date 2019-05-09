import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { User} from "../../user/entities/user.entity";
import {Message} from "./message.entity";
import {MessageThreadMetadata} from "./message-thread-metadata.entity";
import { UserTracker } from 'src/modules/user/entities/user-tracker';


@Entity('messagethread', { schema: 'public' })
export class MessageThread extends UserTracker {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(type => User, user => user.messageThreads, {
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

  @OneToMany(type => Message, message => message.thread, {
    onDelete: 'CASCADE',
  })
  messages: Message[];

  @OneToMany(
    type => MessageThreadMetadata,
    messageThreadMetadata => messageThreadMetadata.thread,
    { onDelete: 'CASCADE' },
  )
  messageThreadMetadatas: MessageThreadMetadata[];
}
