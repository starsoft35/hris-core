import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { Message} from "./message.entity";
import { User} from "../../user/entities/user.entity";


@Entity('messagemetadata', { schema: 'public' })
export class MessageMetadata {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'messagemetadataid',
  })
  id: number;

  @ManyToOne(
    type => Message,
    message => message.messageMetadatas,
    { onDelete: 'CASCADE' },
  )
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
  is_read: boolean;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;
}
