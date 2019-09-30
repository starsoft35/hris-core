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
import { Leave } from './hris_leave';

@Entity('Leaverelative', { schema: 'public' })
@Index('idx_cbbd24371b2adb5c', ['leave'])
export class LeaveRelative {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Leave,
    (Leave: Leave) => Leave.hrisLeaveRelatives,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'leaveid' })
  leave: Leave | null;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'name',
  })
  name: string;

  @Column('date', {
    nullable: false,
    name: 'date_of_birth',
  })
  date_of_birth: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'age',
  })
  age: string;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;
}
