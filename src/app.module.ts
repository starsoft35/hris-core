import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  dataBaseConfiguration,
  getAppsConfiguration,
} from './core/utilities/configuration';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FormModule } from './modules/form/form.module';
import { MessageModule } from './modules/message/message.module';
import { OrganisatinUnitModule } from './modules/organisation-unit/organisation-unit.module';
import { ReportModule } from './modules/report/report.module';
import { TrainingModule } from './modules/training/training.module';

getAppsConfiguration();
@Module({
  imports: [
    TypeOrmModule.forRoot(dataBaseConfiguration),
    // UserModule,
    OrganisatinUnitModule,
    FormModule,
    DashboardModule,
    ReportModule,
    TrainingModule,
    MessageModule,
    // RecordModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
