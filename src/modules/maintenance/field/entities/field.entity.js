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
const field_datatype_entity_1 = require("../../../form/entities/field-datatype.entity");
const field_group_entity_1 = require("../../field-group/entities/field-group.entity");
const field_input_type_entity_1 = require("../../../form/entities/field-input-type.entity");
const field_option_group_entity_1 = require("../../../form/entities/field-option-group.entity");
const field_option_merge_entity_1 = require("../../../form/entities/field-option-merge.entity");
const field_option_entity_1 = require("../../../form/entities/field-option.entity");
const field_relation_entity_1 = require("../../../form/entities/field-relation.entity");
const form_field_member_entity_1 = require("../../../form/entities/form-field-member.entity");
const form_visible_fields_entity_1 = require("../../../form/entities/form-visible-fields.entity");
const form_entity_1 = require("../../../form/entities/form.entity");
const formsection_fieldmembers_entity_1 = require("../../../form/entities/formsection-fieldmembers.entity");
const entity_core_props_1 = require("../../../../core/entities/entity-core-props");
let Field = class Field extends entity_core_props_1.EntityCoreProps {
};
Field.plural = 'fields';
__decorate([
    typeorm_1.ManyToOne(type => field_datatype_entity_1.FieldDataType, fieldDataType => fieldDataType.fields, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'datatypeid' }),
    __metadata("design:type", field_datatype_entity_1.FieldDataType)
], Field.prototype, "dataType", void 0);
__decorate([
    typeorm_1.ManyToOne(type => field_input_type_entity_1.FieldInputType, fieldInputType => fieldInputType.fields, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'inputtypeid' }),
    __metadata("design:type", field_input_type_entity_1.FieldInputType)
], Field.prototype, "inputType", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'caption',
    }),
    __metadata("design:type", String)
], Field.prototype, "caption", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'compulsory',
    }),
    __metadata("design:type", Boolean)
], Field.prototype, "compulsory", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'isunique',
    }),
    __metadata("design:type", Boolean)
], Field.prototype, "isUnique", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'iscalculated',
    }),
    __metadata("design:type", Boolean)
], Field.prototype, "isCalculated", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'description',
    }),
    __metadata("design:type", String)
], Field.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'calculatedexpression',
    }),
    __metadata("design:type", String)
], Field.prototype, "calculatedExpression", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'hashistory',
    }),
    __metadata("design:type", Boolean)
], Field.prototype, "hasHistory", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'hastarget',
    }),
    __metadata("design:type", Boolean)
], Field.prototype, "hasTarget", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'fieldrelation',
    }),
    __metadata("design:type", Boolean)
], Field.prototype, "fieldRelation", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'skipinreport',
    }),
    __metadata("design:type", Boolean)
], Field.prototype, "skipInReport", void 0);
__decorate([
    typeorm_1.OneToMany(type => field_relation_entity_1.FieldRelation, fieldRelation => fieldRelation.childField, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Field.prototype, "childFieldRelations", void 0);
__decorate([
    typeorm_1.OneToMany(type => field_relation_entity_1.FieldRelation, fieldRelation => fieldRelation.parentField, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Field.prototype, "parentFieldRelations", void 0);
__decorate([
    typeorm_1.OneToMany(type => field_option_entity_1.FieldOption, fieldOption => fieldOption.field, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Field.prototype, "fieldOptions", void 0);
__decorate([
    typeorm_1.OneToMany(type => field_option_group_entity_1.FieldOptionGroup, fieldOptionGroup => fieldOptionGroup.field, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Field.prototype, "fieldOptionGroups", void 0);
__decorate([
    typeorm_1.OneToMany(type => field_option_merge_entity_1.FieldOptionMerge, fieldOptionMerge => fieldOptionMerge.field, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Field.prototype, "fieldOptionMerges", void 0);
__decorate([
    typeorm_1.OneToMany(type => form_field_member_entity_1.FormFieldMember, formFieldMember => formFieldMember.field, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Field.prototype, "formFieldMembers", void 0);
__decorate([
    typeorm_1.OneToMany(type => form_visible_fields_entity_1.FormVisibleField, formVisibleField => formVisibleField.field, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Field.prototype, "formVisibleFields", void 0);
__decorate([
    typeorm_1.OneToMany(type => formsection_fieldmembers_entity_1.FormSectionFieldMember, formSectionFieldMember => formSectionFieldMember.field, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Field.prototype, "formSectionFieldMembers", void 0);
__decorate([
    typeorm_1.ManyToMany(type => field_group_entity_1.FieldGroup, fieldGroup => fieldGroup.fields),
    __metadata("design:type", Array)
], Field.prototype, "fieldGroups", void 0);
__decorate([
    typeorm_1.ManyToMany(type => form_entity_1.Form, form => form.fields),
    __metadata("design:type", Array)
], Field.prototype, "forms", void 0);
Field = __decorate([
    typeorm_1.Entity('field', { schema: 'public' })
], Field);
exports.Field = Field;
//# sourceMappingURL=field.entity.js.map