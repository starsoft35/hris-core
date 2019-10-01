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
const field_entity_1 = require("../../maintenance/field/entities/field.entity");
const form_section_entity_1 = require("./form-section.entity");
const base_entity_1 = require("../../../core/entities/base-entity");
let FormSectionFieldMember = class FormSectionFieldMember extends base_entity_1.HRISBaseEntity {
};
FormSectionFieldMember.plural = 'formSectionFieldMembers';
__decorate([
    typeorm_1.ManyToOne(type => form_section_entity_1.FormSection, formSection => formSection.formSectionFieldMembers, { primary: true, nullable: false, onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'formsectionid' }),
    __metadata("design:type", form_section_entity_1.FormSection)
], FormSectionFieldMember.prototype, "formSection", void 0);
__decorate([
    typeorm_1.ManyToOne(type => field_entity_1.Field, field => field.formSectionFieldMembers, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'fieldid' }),
    __metadata("design:type", field_entity_1.Field)
], FormSectionFieldMember.prototype, "field", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'sort',
    }),
    __metadata("design:type", Number)
], FormSectionFieldMember.prototype, "sort", void 0);
FormSectionFieldMember = __decorate([
    typeorm_1.Entity('formsectionfieldmember', { schema: 'public' })
], FormSectionFieldMember);
exports.FormSectionFieldMember = FormSectionFieldMember;
//# sourceMappingURL=formsection-fieldmembers.entity.js.map