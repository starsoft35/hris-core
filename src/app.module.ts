import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisatinUnitModule } from './modules/organisation-unit/organisation-unit.module';
import { FormModule } from './modules/form/form.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

import {
  dataBaseConfiguration,
  getAppsConfiguration,
} from './core/utilities/configuration';

getAppsConfiguration();
@Module({
  imports: [
    TypeOrmModule.forRoot(dataBaseConfiguration),
    // UserModule,
    OrganisatinUnitModule,
    FormModule,
    DashboardModule,
    // RecordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
