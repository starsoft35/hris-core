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
const field_group_entity_1 = require("../../maintenance/field-group/entities/field-group.entity");
const entity_core_props_1 = require("../../../core/entities/entity-core-props");
let FieldGroupSet = class FieldGroupSet extends entity_core_props_1.EntityCoreProps {
};
FieldGroupSet.plural = 'fieldGroupSets';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'fieldgroupsetid',
    }),
    __metadata("design:type", Number)
], FieldGroupSet.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToMany(type => field_group_entity_1.FieldGroup, fieldGroup => fieldGroup.fieldGroupSets, {
        nullable: false,
    }),
    typeorm_1.JoinTable({ name: 'fieldgroupsetmembers' }),
    __metadata("design:type", Array)
], FieldGroupSet.prototype, "fieldGroups", void 0);
FieldGroupSet = __decorate([
    typeorm_1.Entity('fieldgroupset', { schema: 'public' })
], FieldGroupSet);
exports.FieldGroupSet = FieldGroupSet;
//# sourceMappingURL=field-groupset.entity.js.map