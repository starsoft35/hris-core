"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const dashboard_chart_controller_1 = require("./controllers/dashboard-chart.controller");
const dashboard_chart_service_1 = require("./services/dashboard-chart.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const dashboard_chart_entity_1 = require("./entities/dashboard-chart.entity");
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'basic', session: true }),
            typeorm_1.TypeOrmModule.forFeature([dashboard_chart_entity_1.DashboardChart]),
        ],
        controllers: [dashboard_chart_controller_1.DashboardChartController],
        providers: [dashboard_chart_service_1.DashboardChartService],
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map