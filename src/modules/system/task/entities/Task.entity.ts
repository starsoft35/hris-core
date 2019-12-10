import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityCoreProps } from '../../../../core/entities/entity-core-props';

@Entity('task', { schema: 'public' })
export class Task extends EntityCoreProps {
  static plural = 'Tasks';

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256, unique: true })
  uid: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    name: 'name',
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    name: 'log',
  })
  log: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
    name: 'status',
  })
  status: string;

  @Column({
    type: Date,
    nullable: false,
  })
  startedAt: Date | null;

  @Column({
    nullable: false,
    type: Date,
  })
  endedAt: Date | null;
}
