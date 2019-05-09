import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {hris_message_thread} from "../../modules/message/entities/message-thread.entity";
import { User} from "../../modules/user/entities/user.entity";


@Entity('hris_message_thread_metadata', { schema: 'public' })
@Index('idx_240580139d1c3019', ['participant_'])
@Index('idx_24058013e2904019', ['thread_'])
@Index('uniq_24058013539b0606', ['uid'], { unique: true })
export class hris_message_thread_metadata {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    type => hris_message_thread,
    hris_message_thread => hris_message_thread.hris_message_thread_metadatas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'thread_id' })
  thread_: hris_message_thread | null;

    @ManyToOne(type => User, User => User.hris_message_thread_metadatas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'participant_id' })
  participant_: User | null;

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
