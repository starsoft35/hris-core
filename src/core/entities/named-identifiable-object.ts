import { Column } from 'typeorm';

import { EntityCoreProps } from './entity-core-props';

export class NamedIdentifiableObject extends EntityCoreProps {
  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('character varying', {
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column('character varying', {
    nullable: false,
    length: 50,
    name: 'shortname',
  })
  shortName: string;
}
