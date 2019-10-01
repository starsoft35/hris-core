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
var OrganisationUnit_1;
Object.defineProperty(exports, "__esModule", { value: true });
const entity_core_props_1 = require("../../../core/entities/entity-core-props");
const dashboard_chart_entity_1 = require("../../dashboard/entities/dashboard-chart.entity");
const record_entity_1 = require("../../record/entities/record.entity");
const training_session_entity_1 = require("../../training/entities/training-session.entity");
const training_venue_entity_1 = require("../../training/entities/training-venue.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const organisation_unit_completeness_entity_1 = require("./organisation-unit-completeness.entity");
const organisation_unit_group_entity_1 = require("./organisation-unit-group.entity");
let OrganisationUnit = OrganisationUnit_1 = class OrganisationUnit extends entity_core_props_1.EntityCoreProps {
};
OrganisationUnit.plural = 'organisationUnits';
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'organisationunitid',
    }),
    __metadata("design:type", Number)
], OrganisationUnit.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => OrganisationUnit_1, organisationUnit => organisationUnit.organisationUnits, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'parentid' }),
    __metadata("design:type", OrganisationUnit)
], OrganisationUnit.prototype, "parent", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 11,
        default: () => 'NULL::character varying',
        name: 'dhisuid',
    }),
    __metadata("design:type", String)
], OrganisationUnit.prototype, "dhisuid", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'active',
    }),
    __metadata("design:type", Boolean)
], OrganisationUnit.prototype, "active", void 0);
__decorate([
    typeorm_1.Column('date', {
        nullable: true,
        name: 'openingdate',
    }),
    __metadata("design:type", String)
], OrganisationUnit.prototype, "openingDate", void 0);
__decorate([
    typeorm_1.Column('date', {
        nullable: true,
        name: 'closingdate',
    }),
    __metadata("design:type", String)
], OrganisationUnit.prototype, "closingDate", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 255,
        default: () => 'NULL::character varying',
        name: 'geocode',
    }),
    __metadata("design:type", String)
], OrganisationUnit.prototype, "geoCode", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'coordinates',
    }),
    __metadata("design:type", String)
], OrganisationUnit.prototype, "coordinates", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 20,
        default: () => 'NULL::character varying',
        name: 'featuretype',
    }),
    __metadata("design:type", String)
], OrganisationUnit.prototype, "featureType", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'address',
    }),
    __metadata("design:type", String)
], OrganisationUnit.prototype, "address", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 150,
        default: () => 'NULL::character varying',
        name: 'email',
    }),
    __metadata("design:type", String)
], OrganisationUnit.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 150,
        default: () => 'NULL::character varying',
        name: 'phonenumber',
    }),
    __metadata("design:type", String)
], OrganisationUnit.prototype, "phoneNumber", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 150,
        default: () => 'NULL::character varying',
        name: 'contactperson',
    }),
    __metadata("design:type", String)
], OrganisationUnit.prototype, "contactPerson", void 0);
__decorate([
    typeorm_1.OneToMany(type => OrganisationUnit_1, organisationUnit => organisationUnit.parent, {
        cascade: ['insert', 'update'],
    }),
    __metadata("design:type", Array)
], OrganisationUnit.prototype, "children", void 0);
__decorate([
    typeorm_1.OneToMany(type => OrganisationUnit_1, organisationUnit => organisationUnit.parent, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], OrganisationUnit.prototype, "organisationUnits", void 0);
__decorate([
    typeorm_1.OneToMany(type => organisation_unit_completeness_entity_1.OrganisationUnitCompleteness, organisationUnitCompleteness => organisationUnitCompleteness.organisationUnitId, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], OrganisationUnit.prototype, "organisationUnitCompletenesses", void 0);
__decorate([
    typeorm_1.OneToMany(type => record_entity_1.Record, record => record.organisationUnit, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], OrganisationUnit.prototype, "records", void 0);
__decorate([
    typeorm_1.OneToMany(type => training_session_entity_1.TrainingSession, trainingSession => trainingSession.organisationUnit, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], OrganisationUnit.prototype, "trainingSessions", void 0);
__decorate([
    typeorm_1.OneToMany(type => training_venue_entity_1.TrainingVenue, trainingVenue => trainingVenue.organisationUnit, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], OrganisationUnit.prototype, "trainingVenues", void 0);
__decorate([
    typeorm_1.OneToMany(type => user_entity_1.User, user => user.organisationUnits, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], OrganisationUnit.prototype, "users", void 0);
__decorate([
    typeorm_1.ManyToMany(type => organisation_unit_group_entity_1.OrganisationUnitGroup, organisationUnitGroup => organisationUnitGroup.organisationUnits),
    __metadata("design:type", Array)
], OrganisationUnit.prototype, "organisationUnitGroups", void 0);
__decorate([
    typeorm_1.ManyToMany(type => dashboard_chart_entity_1.DashboardChart, dashboardChart => dashboardChart.organisationUnits),
    __metadata("design:type", Array)
], OrganisationUnit.prototype, "dashboardCharts", void 0);
OrganisationUnit = OrganisationUnit_1 = __decorate([
    typeorm_1.Entity('organisationunit', { schema: 'public' })
], OrganisationUnit);
exports.OrganisationUnit = OrganisationUnit;
//# sourceMappingURL=organisation-unit.entity.js.map