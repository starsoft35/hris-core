import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EntityCoreProps } from '../../../../core/entities/entity-core-props';

@Entity('task', { schema: 'public' })
export class Task extends EntityCoreProps {
  static plural = 'Tasks';

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256, unique: true })
  uid: string;

  @Column({ type: 'varchar', length: 256 })
  name: string;

  @Column({type: 'text'})
  log: string

  @Column({type: 'varchar'})
  status: string

  @Column({type: Date})
  startedat: Date

  @Column({type: Date})
  endedat: Date

}
