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
let hris_record_history_date = class hris_record_history_date {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], hris_record_history_date.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 13,
        name: 'uid',
    }),
    __metadata("design:type", String)
], hris_record_history_date.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'instance',
    }),
    __metadata("design:type", String)
], hris_record_history_date.prototype, "instance", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 32,
        name: 'history',
    }),
    __metadata("design:type", String)
], hris_record_history_date.prototype, "history", void 0);
__decorate([
    typeorm_1.Column('date', {
        nullable: false,
        name: 'previousdate',
    }),
    __metadata("design:type", String)
], hris_record_history_date.prototype, "previousdate", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: false,
        name: 'datecreated',
    }),
    __metadata("design:type", Date)
], hris_record_history_date.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'lastupdated',
    }),
    __metadata("design:type", Date)
], hris_record_history_date.prototype, "lastupdated", void 0);
hris_record_history_date = __decorate([
    typeorm_1.Entity('hris_record_history_date', { schema: 'public' }),
    typeorm_1.Index('idx_37522c9443707b0', ['field_']),
    typeorm_1.Index('uniq_37522c9539b0606', ['uid'], { unique: true })
], hris_record_history_date);
exports.hris_record_history_date = hris_record_history_date;
//# sourceMappingURL=hris_record_history_date.js.map