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
const organisation_unit_group_entity_1 = require("./organisation-unit-group.entity");
const entity_core_props_1 = require("../../../core/entities/entity-core-props");
let OrganisationUnitGroupSet = class OrganisationUnitGroupSet extends entity_core_props_1.EntityCoreProps {
};
OrganisationUnitGroupSet.plural = 'organisationUnitGroupSets';
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'organisationunitgroupsetid',
    }),
    __metadata("design:type", Number)
], OrganisationUnitGroupSet.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 11,
        default: () => 'NULL::character varying',
        name: 'dhisuid',
    }),
    __metadata("design:type", String)
], OrganisationUnitGroupSet.prototype, "dhisuid", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'compulsory',
    }),
    __metadata("design:type", Boolean)
], OrganisationUnitGroupSet.prototype, "compulsory", void 0);
__decorate([
    typeorm_1.OneToMany(type => organisation_unit_group_entity_1.OrganisationUnitGroup, organisationUnitGroup => organisationUnitGroup.organisationUnitGroupSetId, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], OrganisationUnitGroupSet.prototype, "organisationUnitGroups", void 0);
OrganisationUnitGroupSet = __decorate([
    typeorm_1.Entity('organisationunitgroupset', { schema: 'public' })
], OrganisationUnitGroupSet);
exports.OrganisationUnitGroupSet = OrganisationUnitGroupSet;
//# sourceMappingURL=organisation-unit-group-set.entity.js.map