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
let hris_leave_type = class hris_leave_type {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], hris_leave_type.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'name',
    }),
    __metadata("design:type", String)
], hris_leave_type.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 25,
        name: 'uid',
    }),
    __metadata("design:type", String)
], hris_leave_type.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: true,
        name: 'maximum_days',
    }),
    __metadata("design:type", Number)
], hris_leave_type.prototype, "maximum_days", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 53,
        default: () => 'NULL::character varying',
        name: 'limit_applicable',
    }),
    __metadata("design:type", String)
], hris_leave_type.prototype, "limit_applicable", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: true,
        name: 'description',
    }),
    __metadata("design:type", String)
], hris_leave_type.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 53,
        default: () => 'NULL::character varying',
        name: 'payment_applicable',
    }),
    __metadata("design:type", String)
], hris_leave_type.prototype, "payment_applicable", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: false,
        name: 'datecreated',
    }),
    __metadata("design:type", Date)
], hris_leave_type.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'lastupdated',
    }),
    __metadata("design:type", Date)
], hris_leave_type.prototype, "lastupdated", void 0);
hris_leave_type = __decorate([
    typeorm_1.Entity('hris_leave_type', { schema: 'public' }),
    typeorm_1.Index('uniq_61a77cdc443707b0', ['field_'], { unique: true })
], hris_leave_type);
exports.hris_leave_type = hris_leave_type;
//# sourceMappingURL=hris_leave_type.js.map