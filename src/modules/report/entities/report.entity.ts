import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('report', { schema: 'public' })
export class Report extends IdentifiableObject {

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
