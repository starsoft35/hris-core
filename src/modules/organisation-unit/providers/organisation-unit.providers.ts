import { Connection, Repository } from 'typeorm';
import { OrganisationUnit } from '../entities/organisationunit.entity';

export const organisationUnitProviders = [
  {
    provide: 'ORGANISATION_UNIT_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(OrganisationUnit),
    inject: ['DATABASE_CONNECTION'],
  },
];
