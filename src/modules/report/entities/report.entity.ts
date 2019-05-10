import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { Column, Entity } from 'typeorm';

@Entity('report', { schema: 'public' })
export class Report extends IdentifiableObject {
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
