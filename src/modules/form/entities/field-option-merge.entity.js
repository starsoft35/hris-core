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
let FieldOptionMerge = class FieldOptionMerge extends entity_core_props_1.EntityCoreProps {
};
FieldOptionMerge.plural = 'fieldOptionMerges';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], FieldOptionMerge.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => field_entity_1.Field, field => field.fieldOptionMerges, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'fieldid' }),
    __metadata("design:type", field_entity_1.Field)
], FieldOptionMerge.prototype, "field", void 0);
__decorate([
    typeorm_1.ManyToOne(type => field_option_entity_1.FieldOption, fieldOption => fieldOption.fieldOptionMerges, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'mergedfieldoptionid' }),
    __metadata("design:type", field_option_entity_1.FieldOption)
], FieldOptionMerge.prototype, "mergedFieldOption", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'removedfieldoptionvalue',
    }),
    __metadata("design:type", String)
], FieldOptionMerge.prototype, "removedFieldOptionValue", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 13,
        name: 'removedfieldoptionuid',
    }),
    __metadata("design:type", String)
], FieldOptionMerge.prototype, "removedFieldOptionUid", void 0);
FieldOptionMerge = __decorate([
    typeorm_1.Entity('fieldoptionmerge', { schema: 'public' })
], FieldOptionMerge);
exports.FieldOptionMerge = FieldOptionMerge;
//# sourceMappingURL=field-option-merge.entity.js.map