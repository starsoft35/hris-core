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
const form_entity_1 = require("./form.entity");
const base_entity_1 = require("../../../core/entities/base-entity");
let FormVisibleField = class FormVisibleField extends base_entity_1.HRISBaseEntity {
};
FormVisibleField.plural = 'formVisibleFields';
__decorate([
    typeorm_1.ManyToOne(type => form_entity_1.Form, form => form.formVisibleFields, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'formid' }),
    __metadata("design:type", form_entity_1.Form)
], FormVisibleField.prototype, "form", void 0);
__decorate([
    typeorm_1.ManyToOne(type => field_entity_1.Field, field => field.formVisibleFields, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'fieldid' }),
    __metadata("design:type", field_entity_1.Field)
], FormVisibleField.prototype, "field", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'sort',
    }),
    __metadata("design:type", Number)
], FormVisibleField.prototype, "sort", void 0);
FormVisibleField = __decorate([
    typeorm_1.Entity('formvisiblefield', { schema: 'public' })
], FormVisibleField);
exports.FormVisibleField = FormVisibleField;
//# sourceMappingURL=form-visible-fields.entity.js.map