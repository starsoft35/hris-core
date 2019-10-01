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
const field_option_group_entity_1 = require("./field-option-group.entity");
const entity_core_props_1 = require("../../../core/entities/entity-core-props");
let FieldOptionGroupSet = class FieldOptionGroupSet extends entity_core_props_1.EntityCoreProps {
};
FieldOptionGroupSet.plural = 'fieldOptionGroupSets';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'fieldoptiongroupsetid',
    }),
    __metadata("design:type", Number)
], FieldOptionGroupSet.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToMany(type => field_option_group_entity_1.FieldOptionGroup, fieldOptionGroup => fieldOptionGroup.fieldOptionGroupSets, { nullable: false }),
    typeorm_1.JoinTable({ name: 'fieldoptiongroupsetmembers' }),
    __metadata("design:type", Array)
], FieldOptionGroupSet.prototype, "fieldOptionGroups", void 0);
FieldOptionGroupSet = __decorate([
    typeorm_1.Entity('fieldoptiongroupset', { schema: 'public' })
], FieldOptionGroupSet);
exports.FieldOptionGroupSet = FieldOptionGroupSet;
//# sourceMappingURL=field-option-groupset.entity.js.map