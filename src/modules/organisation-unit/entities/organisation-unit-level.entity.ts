import { IdentifiableObject } from '../../../core/entities/identifiable-object';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('organisationunitlevel', { schema: 'public' })
export class OrganisationUnitLevel extends IdentifiableObject {

  static plural = 'organisationUnitLevels';

  @PrimaryGeneratedColumn({
    name: 'organisationunitlevelid',
  })
  id: number;
  @Column('integer', {
    nullable: false,
    name: 'level',
  })
  level: number;

  @Column('boolean', {
    nullable: false,
    name: 'dataentrylevel',
  })
  dataEntryLevel: boolean;
}
