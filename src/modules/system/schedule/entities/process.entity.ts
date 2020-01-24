import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityCoreProps } from '../../../../core/entities/entity-core-props';
@Entity('process', { schema: 'public' })
export class Process extends EntityCoreProps {
  static plural = 'processs';

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256, unique: true })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    unique: true,
  })
  name: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
  })
  type: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
  })
  cron: string;
}
