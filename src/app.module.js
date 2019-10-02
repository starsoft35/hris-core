"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_controller_1 = require("./app.controller");
const configuration_1 = require("./core/utilities/configuration");
const dashboard_module_1 = require("./modules/dashboard/dashboard.module");
const form_module_1 = require("./modules/form/form.module");
const message_module_1 = require("./modules/message/message.module");
const organisation_unit_module_1 = require("./modules/organisation-unit/organisation-unit.module");
const report_module_1 = require("./modules/report/report.module");
const training_module_1 = require("./modules/training/training.module");
const user_module_1 = require("./modules/user/user.module");
const record_module_1 = require("./modules/record/record.module");
const apps_module_1 = require("./modules/app/apps.module");
const apps_service_1 = require("./modules/app/services/apps.service");
const field_module_1 = require("./modules/maintenance/field/field.module");
const field_group_module_1 = require("./modules/maintenance/field-group/field-group.module");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(configuration_1.getDataBaseConfiguration()),
            user_module_1.UserModule,
            organisation_unit_module_1.OrganisatinUnitModule,
            form_module_1.FormModule,
            field_module_1.FieldModule,
            field_group_module_1.FieldGroupModule,
            dashboard_module_1.DashboardModule,
            report_module_1.ReportModule,
            training_module_1.TrainingModule,
            message_module_1.MessageModule,
            record_module_1.RecordModule,
            apps_module_1.AppsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [apps_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map