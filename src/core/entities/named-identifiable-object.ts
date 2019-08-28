import { Column } from 'typeorm';

import { IdentifiableObject } from './identifiable-object';

export class NamedIdentifiableObject extends IdentifiableObject {
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
