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
import { HelpChapter } from './hris_help_chapter';

@Entity('helptopic', { schema: 'public' })
@Index('uniq_79c321af539b0606', ['uid'], { unique: true })
export class HelpTopic {
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

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

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

  @ManyToMany(
    () => HelpChapter,
    (HelpChapter: HelpChapter) => HelpChapter.hrisHelpTopics,
    { nullable: false },
  )
  @JoinTable({ name: 'helptopicchapters' })
  hrisHelpChapters: HelpChapter[];
}
