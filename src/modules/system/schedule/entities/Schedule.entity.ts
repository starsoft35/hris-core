import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityCoreProps } from '../../../../core/entities/entity-core-props';
@Entity('schedule', { schema: 'public' })
export class Schedule extends EntityCoreProps {
  static plural = 'Schedules';

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256, unique: true })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    unique: true
  })
  name: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
  })
  progress: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
  })
  cron: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'functionid',
  })
  functionid: string;
}
