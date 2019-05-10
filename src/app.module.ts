import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisatinUnitModule } from './modules/organisation-unit/organisation-unit.module';
import { FormModule } from './modules/form/form.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import {
import { MessageMetadataController } from './modules/message/message-metadata/message-metadata.controller';
import { MessageThreadMetadataController } from './modules/message/message-thread-metadata/message-thread-metadata.controller';
import { MessageThreadController } from './modules/message/message-thread/message-thread.controller';
import { MessageController } from './modules/message/message/message.controller';
import { MessageMetadataService } from './modules/message/message-metadata/message-metadata.service';
import { MessageThreadMetadataService } from './modules/message/message-thread-metadata/message-thread-metadata.service';
import { MessageThreadService } from './modules/message/message-thread/message-thread.service';
import { MessageService } from './modules/message/message/message.service';
import { ReportModule } from './report/report.module';

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
    ReportModule,
    // RecordModule,
  ],
  controllers: [AppController, MessageMetadataController, MessageThreadMetadataController, MessageThreadController, MessageController],
  providers: [AppService, MessageMetadataService, MessageThreadMetadataService, MessageThreadService, MessageService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
