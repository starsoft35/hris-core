import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { OrganisationUnitGroup } from './organisation-unit-group.entity';
import { IdentifiableObject } from '../../../core/entities/identifiable-object';

@Entity('organisationunitgroupset', { schema: 'public' })
export class OrganisationUnitGroupSet extends IdentifiableObject {

  static plural = 'organisationUnitGroupSets';

  @PrimaryGeneratedColumn({
    name: 'organisationunitgroupsetid',
  })
  id: number;

  @Column('character varying', {
    nullable: true,
    length: 11,
    default: () => 'NULL::character varying',
    name: 'dhisuid',
  })
  dhisuid: string | null;

  @Column('boolean', {
    nullable: false,
    name: 'compulsory',
  })
  compulsory: boolean;

  @OneToMany(
    type => OrganisationUnitGroup,
    organisationUnitGroup => organisationUnitGroup.organisationUnitGroupSetId,
    { onDelete: 'CASCADE' },
  )
  organisationUnitGroups: OrganisationUnitGroup[];
}
