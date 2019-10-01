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
const field_option_merge_entity_1 = require("./field-option-merge.entity");
const field_entity_1 = require("../../maintenance/field/entities/field.entity");
const field_option_group_entity_1 = require("./field-option-group.entity");
let FieldOption = class FieldOption extends entity_core_props_1.EntityCoreProps {
};
FieldOption.plural = 'fieldOptions';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'fieldoptionid',
    }),
    __metadata("design:type", Number)
], FieldOption.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => field_entity_1.Field, field => field.fieldOptions, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'fieldid' }),
    __metadata("design:type", field_entity_1.Field)
], FieldOption.prototype, "field", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'value',
    }),
    __metadata("design:type", String)
], FieldOption.prototype, "value", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'skipinreport',
    }),
    __metadata("design:type", Boolean)
], FieldOption.prototype, "skipInReport", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: true,
        name: 'sort',
    }),
    __metadata("design:type", Number)
], FieldOption.prototype, "sort", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'hastraining',
    }),
    __metadata("design:type", Boolean)
], FieldOption.prototype, "hasTraining", void 0);
__decorate([
    typeorm_1.OneToMany(type => field_option_merge_entity_1.FieldOptionMerge, fieldOptionMerge => fieldOptionMerge.mergedFieldOption, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], FieldOption.prototype, "fieldOptionMerges", void 0);
__decorate([
    typeorm_1.ManyToMany(type => field_option_group_entity_1.FieldOptionGroup, fieldOptionGroup => fieldOptionGroup.fieldOptions),
    __metadata("design:type", Array)
], FieldOption.prototype, "fieldOptionGroups", void 0);
FieldOption = __decorate([
    typeorm_1.Entity('fieldoption', { schema: 'public' })
], FieldOption);
exports.FieldOption = FieldOption;
//# sourceMappingURL=field-option.entity.js.map