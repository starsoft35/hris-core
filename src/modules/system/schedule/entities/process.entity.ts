import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityCoreProps } from '../../../../core/entities/entity-core-props';
@Entity('process', { schema: 'public' })
export class Process extends EntityCoreProps {
  static plural = 'processes';

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256, unique: true })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
  })
  name: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
  })
  description: string;

  @Column('character varying', {
    nullable: false,
    length: 256
  })
  code: string;
}
