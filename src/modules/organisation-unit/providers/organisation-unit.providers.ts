import { Connection, Repository } from 'typeorm';
import { OrganisationUnit } from '../../../database/entities/organisationunit';

export const organisationUnitProviders = [
  {
    provide: 'ORGANISATION_UNIT_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(OrganisationUnit),
    inject: ['DATABASE_CONNECTION'],
  },
];
