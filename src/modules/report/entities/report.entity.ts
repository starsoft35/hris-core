import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('report', { schema: 'public' })
export class Report extends EntityCoreProps {
  @PrimaryGeneratedColumn({
    name: 'userid',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'uri',
  })
  uri: string;

  @Column('text', {
    nullable: false,
    name: 'parameters',
  })
  parameters: string;
}
