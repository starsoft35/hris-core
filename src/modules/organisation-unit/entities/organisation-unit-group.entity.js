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
const typeorm_1 = require("typeorm");
const organisation_unit_group_set_entity_1 = require("./organisation-unit-group-set.entity");
const organisation_unit_entity_1 = require("./organisation-unit.entity");
const entity_core_props_1 = require("../../../core/entities/entity-core-props");
let OrganisationUnitGroup = class OrganisationUnitGroup extends entity_core_props_1.EntityCoreProps {
};
OrganisationUnitGroup.plural = 'organisationUnitGroups';
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'organisationunitgroupid',
    }),
    __metadata("design:type", Number)
], OrganisationUnitGroup.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => organisation_unit_group_set_entity_1.OrganisationUnitGroupSet, organisationUnitGroupSet => organisationUnitGroupSet.organisationUnitGroups, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'organisationunitgroupsetid' }),
    __metadata("design:type", String)
], OrganisationUnitGroup.prototype, "organisationUnitGroupSetId", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 11,
        default: () => 'NULL::character varying',
        name: 'dhisuid',
    }),
    __metadata("design:type", String)
], OrganisationUnitGroup.prototype, "dhisuid", void 0);
__decorate([
    typeorm_1.ManyToMany(type => organisation_unit_entity_1.OrganisationUnit, organisationUnit => organisationUnit.organisationUnitGroups, { nullable: false }),
    typeorm_1.JoinTable({ name: 'organisationunitgroupmembers' }),
    __metadata("design:type", Array)
], OrganisationUnitGroup.prototype, "organisationUnits", void 0);
OrganisationUnitGroup = __decorate([
    typeorm_1.Entity('organisationunitgroup', { schema: 'public' })
], OrganisationUnitGroup);
exports.OrganisationUnitGroup = OrganisationUnitGroup;
//# sourceMappingURL=organisation-unit-group.entity.js.map