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
const entity_core_props_1 = require("../../../../core/entities/entity-core-props");
const typeorm_1 = require("typeorm");
const field_groupset_entity_1 = require("../../../form/entities/field-groupset.entity");
const field_entity_1 = require("../../field/entities/field.entity");
let FieldGroup = class FieldGroup extends entity_core_props_1.EntityCoreProps {
};
FieldGroup.plural = 'fieldGroups';
__decorate([
    typeorm_1.ManyToMany(type => field_entity_1.Field, field => field.fieldGroups, { nullable: false }),
    typeorm_1.JoinTable({ name: 'fieldgroupmembers' }),
    __metadata("design:type", Array)
], FieldGroup.prototype, "fields", void 0);
__decorate([
    typeorm_1.ManyToMany(type => field_groupset_entity_1.FieldGroupSet, fieldGroupSet => fieldGroupSet.fieldGroups),
    __metadata("design:type", Array)
], FieldGroup.prototype, "fieldGroupSets", void 0);
FieldGroup = __decorate([
    typeorm_1.Entity('fieldgroup', { schema: 'public' })
], FieldGroup);
exports.FieldGroup = FieldGroup;
//# sourceMappingURL=field-group.entity.js.map