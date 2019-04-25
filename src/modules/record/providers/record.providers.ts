import { Connection, Repository } from 'typeorm';
import { Record } from '../entities/record';

export const recordProviders = [
  {
    provide: 'RECORD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Record),
    inject: ['DATABASE_CONNECTION'],
  },
];
