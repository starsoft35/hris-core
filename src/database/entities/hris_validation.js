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
let hris_validation = class hris_validation {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], hris_validation.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 13,
        name: 'uid',
    }),
    __metadata("design:type", String)
], hris_validation.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'name',
    }),
    __metadata("design:type", String)
], hris_validation.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'description',
    }),
    __metadata("design:type", String)
], hris_validation.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 40,
        name: 'operator',
    }),
    __metadata("design:type", String)
], hris_validation.prototype, "operator", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'leftexpression',
    }),
    __metadata("design:type", String)
], hris_validation.prototype, "leftexpression", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'rightexpression',
    }),
    __metadata("design:type", String)
], hris_validation.prototype, "rightexpression", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: false,
        name: 'datecreated',
    }),
    __metadata("design:type", Date)
], hris_validation.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'lastupdated',
    }),
    __metadata("design:type", Date)
], hris_validation.prototype, "lastupdated", void 0);
hris_validation = __decorate([
    typeorm_1.Entity('hris_validation', { schema: 'public' }),
    typeorm_1.Index('validation_equation_idx', ['leftexpression', 'operator', 'rightexpression'], { unique: true }),
    typeorm_1.Index('uniq_95b764235e237e06', ['name'], { unique: true }),
    typeorm_1.Index('uniq_95b76423539b0606', ['uid'], { unique: true })
], hris_validation);
exports.hris_validation = hris_validation;
//# sourceMappingURL=hris_validation.js.map