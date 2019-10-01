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
const organisation_unit_completeness_entity_1 = require("../../organisation-unit/entities/organisation-unit-completeness.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
const record_entity_1 = require("../../record/entities/record.entity");
const field_entity_1 = require("../../maintenance/field/entities/field.entity");
const form_field_member_entity_1 = require("./form-field-member.entity");
const form_section_entity_1 = require("./form-section.entity");
const form_visible_fields_entity_1 = require("./form-visible-fields.entity");
let Form = class Form extends entity_core_props_1.EntityCoreProps {
};
Form.plural = 'forms';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'formid',
    }),
    __metadata("design:type", Number)
], Form.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'hypertext',
    }),
    __metadata("design:type", String)
], Form.prototype, "hyperText", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 64,
        default: () => 'NULL::character varying',
        name: 'title',
    }),
    __metadata("design:type", String)
], Form.prototype, "title", void 0);
__decorate([
    typeorm_1.OneToMany(type => form_field_member_entity_1.FormFieldMember, formFieldMember => formFieldMember.form, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Form.prototype, "formFieldMembers", void 0);
__decorate([
    typeorm_1.OneToMany(type => form_visible_fields_entity_1.FormVisibleField, formVisibleField => formVisibleField.form, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Form.prototype, "formVisibleFields", void 0);
__decorate([
    typeorm_1.OneToMany(type => form_section_entity_1.FormSection, formSection => formSection.form, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Form.prototype, "formSections", void 0);
__decorate([
    typeorm_1.OneToMany(type => organisation_unit_completeness_entity_1.OrganisationUnitCompleteness, organisationUnitCompleteness => organisationUnitCompleteness.form),
    __metadata("design:type", Array)
], Form.prototype, "organisationUnitCompletenesss", void 0);
__decorate([
    typeorm_1.OneToMany(type => record_entity_1.Record, record => record.form, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Form.prototype, "records", void 0);
__decorate([
    typeorm_1.ManyToMany(type => field_entity_1.Field, field => field.forms, {
        nullable: false,
    }),
    typeorm_1.JoinTable({ name: 'formuniquerecordfields' }),
    __metadata("design:type", Array)
], Form.prototype, "fields", void 0);
__decorate([
    typeorm_1.ManyToMany(type => user_entity_1.User, user => user.forms),
    __metadata("design:type", Array)
], Form.prototype, "users", void 0);
Form = __decorate([
    typeorm_1.Entity('form', { schema: 'public' })
], Form);
exports.Form = Form;
//# sourceMappingURL=form.entity.js.map