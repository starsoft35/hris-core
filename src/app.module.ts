import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { getDataBaseConfiguration } from './core/utilities/configuration';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FormModule } from './modules/form/form.module';
import { MessageModule } from './modules/message/message.module';
import { OrganisatinUnitModule } from './modules/organisation-unit/organisation-unit.module';
import { ReportModule } from './modules/report/report.module';
import { TrainingModule } from './modules/training/training.module';
import { UserModule } from './modules/user/user.module';
import { RecordModule } from './modules/record/record.module';
import { AppsModule } from './modules/app/apps.module';
import { AppService } from './modules/app/services/apps.service';
import { FieldModule } from './modules/maintenance/field/field.module';
import { FieldGroupModule } from './modules/maintenance/field-group/field-group.module';
import { UserRoleModule } from './modules/system/user-role/user-role.module';
import { UserGroupModule } from './modules/system/user-group/user-group.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDataBaseConfiguration()),
    UserModule,
    OrganisatinUnitModule,
    FormModule,
    FieldModule,
    FieldGroupModule,
    UserModule,
    UserRoleModule,
    UserGroupModule,
    DashboardModule,
    ReportModule,
    TrainingModule,
    MessageModule,
    RecordModule,
    AppsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
