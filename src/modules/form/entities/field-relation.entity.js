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
const base_entity_1 = require("../../../core/entities/base-entity");
let FieldRelation = class FieldRelation extends base_entity_1.HRISBaseEntity {
};
FieldRelation.plural = 'fieldRelations';
__decorate([
    typeorm_1.ManyToOne(type => field_entity_1.Field, field => field.parentFieldRelations, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'parentfield' }),
    __metadata("design:type", field_entity_1.Field)
], FieldRelation.prototype, "parentField", void 0);
__decorate([
    typeorm_1.ManyToOne(type => field_entity_1.Field, field => field.childFieldRelations, {
        primary: true,
        nullable: false,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'child_field' }),
    __metadata("design:type", field_entity_1.Field)
], FieldRelation.prototype, "childField", void 0);
FieldRelation = __decorate([
    typeorm_1.Entity('fieldrelation', { schema: 'public' })
], FieldRelation);
exports.FieldRelation = FieldRelation;
//# sourceMappingURL=field-relation.entity.js.map