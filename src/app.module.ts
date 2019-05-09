import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisatinUnitModule } from './modules/organisation-unit/organisation-unit.module';
import { getDataBaseConfiguration, getAppsConfiguration } from './core/utilities/configuration';

getAppsConfiguration();
@Module({
  imports: [
    TypeOrmModule.forRoot(
      getDataBaseConfiguration()
    ),
    // UserModule,
    OrganisatinUnitModule,
    // RecordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
