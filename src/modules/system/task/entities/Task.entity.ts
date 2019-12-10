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
    nullable: false,
    length: 255,
    unique: true
  })
  name: string;

  @Column({
    nullable: false,
    length: 255,
  })
  log: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  status: string;

  @Column({
    type: Date,
    nullable: false,
  })
  startedat: Date | null;

  @Column({
    nullable: false,
    type: Date,
  })
  endedat: Date | null;
}
