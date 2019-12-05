import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { EntityCoreProps } from '../../../../core/entities/entity-core-props';
  
  @Entity('schedule', { schema: 'public' })
  export class Schedule extends EntityCoreProps {
    static plural = 'Schedules';
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 256, unique: true })
    uid: string;
  
    @Column({ type: 'varchar', length: 256 })
    startedAt: string;
  
    @Column({type: 'text'})
    progress: string
  
    @Column({type: 'varchar'})
    cron: string
  }
  