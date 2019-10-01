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
const entity_core_props_1 = require("../../../core/entities/entity-core-props");
const organisation_unit_entity_1 = require("../../organisation-unit/entities/organisation-unit.entity");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entities/user.entity");
let DashboardChart = class DashboardChart extends entity_core_props_1.EntityCoreProps {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], DashboardChart.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.dashboardCharts, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'userid' }),
    __metadata("design:type", user_entity_1.User)
], DashboardChart.prototype, "user", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'graphtype',
    }),
    __metadata("design:type", String)
], DashboardChart.prototype, "graphType", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'lowerlevels',
    }),
    __metadata("design:type", Boolean)
], DashboardChart.prototype, "lowerlevels", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'systemwide',
    }),
    __metadata("design:type", Boolean)
], DashboardChart.prototype, "systemWide", void 0);
__decorate([
    typeorm_1.ManyToMany(type => organisation_unit_entity_1.OrganisationUnit, organisationUnit => organisationUnit.dashboardCharts, { nullable: false }),
    typeorm_1.JoinTable({ name: 'dashboardchartorganisationunitmembers' }),
    __metadata("design:type", Array)
], DashboardChart.prototype, "organisationUnits", void 0);
DashboardChart = __decorate([
    typeorm_1.Entity('dashboardchart', { schema: 'public' })
], DashboardChart);
exports.DashboardChart = DashboardChart;
//# sourceMappingURL=dashboard-chart.entity.js.map