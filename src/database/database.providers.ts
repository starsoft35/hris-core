import { createConnection } from 'typeorm';

export const databaseProviders = [
         {
           provide: 'DATABASE_CONNECTION',
           useFactory: async () =>
             await createConnection({
               type: 'postgres',
               host: 'localhost',
               port: 5432,
               username: 'postgres',
               password: 'postgres',
               database: 'symfony_hris3',
               entities: [
                 __dirname + '/entities/*.ts',
               ],
               synchronize: false,
             }),
         },
       ];