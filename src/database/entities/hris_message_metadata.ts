import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_message} from "./hris_message";
import { User} from "./user";


@Entity('hris_message_metadata', { schema: 'public' })
@Index('idx_b2eeb3a7537a1329', ['message_'])
@Index('idx_b2eeb3a79d1c3019', ['participant_'])
@Index('uniq_b2eeb3a7539b0606', ['uid'], { unique: true })
export class hris_message_metadata {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    type => hris_message,
    hris_message => hris_message.hris_message_metadatas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'message_id' })
  message_: hris_message | null;

    @ManyToOne(type => User, User => User.hris_message_metadatas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'participant_id' })
  participant_: User | null;

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
