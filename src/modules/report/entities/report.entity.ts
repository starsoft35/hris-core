import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity } from 'typeorm';

@Entity('report', { schema: 'public' })
export class Report extends EntityCoreProps {

  static plural = 'reports';

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
