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
let hris_instance_records = class hris_instance_records {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], hris_instance_records.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 13,
        name: 'uid',
    }),
    __metadata("design:type", String)
], hris_instance_records.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'instance_id',
    }),
    __metadata("design:type", Number)
], hris_instance_records.prototype, "instance_id", void 0);
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        name: 'record_id',
    }),
    __metadata("design:type", Number)
], hris_instance_records.prototype, "record_id", void 0);
hris_instance_records = __decorate([
    typeorm_1.Entity('hris_instance_records', { schema: 'public' })
], hris_instance_records);
exports.hris_instance_records = hris_instance_records;
//# sourceMappingURL=hris_instance_records.js.map