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
const field_entity_1 = require("../../maintenance/field/entities/field.entity");
let FieldInputType = class FieldInputType extends entity_core_props_1.EntityCoreProps {
};
FieldInputType.plural = 'fieldInputTypes';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'fieldinputtypeid',
    }),
    __metadata("design:type", Number)
], FieldInputType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 255,
        default: () => 'NULL::character varying',
        name: 'htmltag',
    }),
    __metadata("design:type", String)
], FieldInputType.prototype, "htmltag", void 0);
__decorate([
    typeorm_1.OneToMany(type => field_entity_1.Field, field => field.inputType, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], FieldInputType.prototype, "fields", void 0);
FieldInputType = __decorate([
    typeorm_1.Entity('fieldinputtype', { schema: 'public' })
], FieldInputType);
exports.FieldInputType = FieldInputType;
//# sourceMappingURL=field-input-type.entity.js.map