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
const form_entity_1 = require("../../form/entities/form.entity");
const typeorm_1 = require("typeorm");
const organisation_unit_entity_1 = require("./organisation-unit.entity");
let OrganisationUnitCompleteness = class OrganisationUnitCompleteness extends entity_core_props_1.EntityCoreProps {
};
OrganisationUnitCompleteness.plural = 'organisationUnitCompletenesses';
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'organisationunitcompletenessid',
    }),
    __metadata("design:type", Number)
], OrganisationUnitCompleteness.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => organisation_unit_entity_1.OrganisationUnit, organisationUnit => organisationUnit.organisationUnitCompletenesses, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'organisationunitid' }),
    __metadata("design:type", organisation_unit_entity_1.OrganisationUnit)
], OrganisationUnitCompleteness.prototype, "organisationUnitId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => form_entity_1.Form, form => form.organisationUnitCompletenesss, {
        nullable: false,
    }),
    typeorm_1.JoinColumn({ name: 'formid' }),
    __metadata("design:type", form_entity_1.Form)
], OrganisationUnitCompleteness.prototype, "form", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: true,
        name: 'expectation',
    }),
    __metadata("design:type", Number)
], OrganisationUnitCompleteness.prototype, "expectation", void 0);
OrganisationUnitCompleteness = __decorate([
    typeorm_1.Entity('organisationunitcompleteness', { schema: 'public' })
], OrganisationUnitCompleteness);
exports.OrganisationUnitCompleteness = OrganisationUnitCompleteness;
//# sourceMappingURL=organisation-unit-completeness.entity.js.map