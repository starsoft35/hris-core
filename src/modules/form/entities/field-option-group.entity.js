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
const typeorm_1 = require("typeorm");
const field_option_entity_1 = require("./field-option.entity");
const field_entity_1 = require("../../maintenance/field/entities/field.entity");
const field_option_groupset_entity_1 = require("./field-option-groupset.entity");
let FieldOptionGroup = class FieldOptionGroup extends entity_core_props_1.EntityCoreProps {
};
FieldOptionGroup.plural = 'fieldOptionGroups';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'fieldoptiongroupid',
    }),
    __metadata("design:type", Number)
], FieldOptionGroup.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => field_entity_1.Field, field => field.fieldOptionGroups, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'fieldid' }),
    __metadata("design:type", field_entity_1.Field)
], FieldOptionGroup.prototype, "field", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 64,
        default: () => 'NULL::character varying',
        name: 'operator',
    }),
    __metadata("design:type", String)
], FieldOptionGroup.prototype, "operator", void 0);
__decorate([
    typeorm_1.ManyToMany(type => field_option_entity_1.FieldOption, fieldOption => fieldOption.fieldOptionGroups, { nullable: false }),
    typeorm_1.JoinTable({ name: 'fieldoptiongroupmembers' }),
    __metadata("design:type", Array)
], FieldOptionGroup.prototype, "fieldOptions", void 0);
__decorate([
    typeorm_1.ManyToMany(type => field_option_groupset_entity_1.FieldOptionGroupSet, fieldOptionGroupSet => fieldOptionGroupSet.fieldOptionGroups, { nullable: false }),
    __metadata("design:type", Array)
], FieldOptionGroup.prototype, "fieldOptionGroupSets", void 0);
FieldOptionGroup = __decorate([
    typeorm_1.Entity('fieldoptiongroup', { schema: 'public' })
], FieldOptionGroup);
exports.FieldOptionGroup = FieldOptionGroup;
//# sourceMappingURL=field-option-group.entity.js.map