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
const form_entity_1 = require("./form.entity");
const formsection_fieldmembers_entity_1 = require("./formsection-fieldmembers.entity");
const entity_core_props_1 = require("../../../core/entities/entity-core-props");
let FormSection = class FormSection extends entity_core_props_1.EntityCoreProps {
};
FormSection.plural = 'formSections';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], FormSection.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => form_entity_1.Form, form => form.formSections, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'formid' }),
    __metadata("design:type", form_entity_1.Form)
], FormSection.prototype, "form", void 0);
__decorate([
    typeorm_1.OneToMany(type => formsection_fieldmembers_entity_1.FormSectionFieldMember, formSectionFieldMembers => formSectionFieldMembers.formSection, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], FormSection.prototype, "formSectionFieldMembers", void 0);
FormSection = __decorate([
    typeorm_1.Entity('formsection', { schema: 'public' })
], FormSection);
exports.FormSection = FormSection;
//# sourceMappingURL=form-section.entity.js.map