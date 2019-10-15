import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';

import { AppController } from './app.controller';
import { getDataBaseConfiguration } from './core/utilities/configuration';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { FormModule } from './modules/form/form.module';
import { MessageModule } from './modules/message/message.module';
import { OrganisatinUnitModule } from './modules/organisation-unit/organisation-unit.module';
import { ReportModule } from './modules/report/report.module';
import { TrainingModule } from './modules/training/training.module';
import { RecordModule } from './modules/record/record.module';
import { FieldModule } from './modules/maintenance/field/field.module';
import { FieldGroupModule } from './modules/maintenance/field-group/field-group.module';
import { UserRoleModule } from './modules/system/user-role/user-role.module';
import { UserGroupModule } from './modules/system/user-group/user-group.module';
import { UserAuthorityModule } from './modules/system/user-authority/user-authority.module';
import { UserModule } from './modules/system/user/user.module';
import { FieldOptionModule } from './modules/maintenance/field-option/field-option.module';
import { FieldInputTypeModule } from './modules/maintenance/field-input-type/field-input-type.module';
import { FieldDataTypeModule } from './modules/maintenance/field-data-type/field-data-type.module';
import { FieldGroupSetModule } from './modules/maintenance/field-group-set/field-group-set.module';
import { FieldOptionGroupModule } from './modules/maintenance/field-option-group/field-option-group.module';
import { FieldOptionMergeModule } from './modules/maintenance/field-option-merge/field-option-merge.module';
import { FieldOptionChildrenModule } from './modules/maintenance/field-option-children/field-option-children.module';
import { FieldOptionGroupSetModule } from './modules/maintenance/field-option-group-set/field-option-group-set.module';
import { FieldRelationModule } from './modules/maintenance/field-relation/field-relation.module';
import { AppsModule } from './modules/app/apps.module';
import { AppsService } from './modules/app/services/apps.service';
import { AppsController } from './modules/app/controllers/apps.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AppsModule,
    Repository,
    TypeOrmModule.forRoot(getDataBaseConfiguration()),
    OrganisatinUnitModule,
    // FormModule,

    // START: Field Modules
    FieldModule,
    FieldDataTypeModule,
    FieldGroupModule,
    FieldGroupSetModule,
    FieldInputTypeModule,
    FieldOptionModule,
    FieldOptionChildrenModule,
    FieldOptionGroupModule,
    FieldOptionGroupSetModule,
    FieldOptionMergeModule,
    FieldRelationModule,
    // END: Field Modules

    // START: User Modules
    UserModule,
    UserRoleModule,
    UserGroupModule,
    UserAuthorityModule,
    // END: User Modules

    DashboardModule,
    ReportModule,
    TrainingModule,
    MessageModule,
    RecordModule,
  ],
  // ToDO: Re-check these import statement
  // controllers: [AppController],
  // providers: [AppService],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
