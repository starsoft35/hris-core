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
let hris_leave_relative = class hris_leave_relative {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], hris_leave_relative.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'name',
    }),
    __metadata("design:type", String)
], hris_leave_relative.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('date', {
        nullable: false,
        name: 'date_of_birth',
    }),
    __metadata("design:type", String)
], hris_leave_relative.prototype, "date_of_birth", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'age',
    }),
    __metadata("design:type", String)
], hris_leave_relative.prototype, "age", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 13,
        name: 'uid',
    }),
    __metadata("design:type", String)
], hris_leave_relative.prototype, "uid", void 0);
hris_leave_relative = __decorate([
    typeorm_1.Entity('hris_leave_relative', { schema: 'public' }),
    typeorm_1.Index('idx_cbbd24371b2adb5c', ['leave_'])
], hris_leave_relative);
exports.hris_leave_relative = hris_leave_relative;
//# sourceMappingURL=hris_leave_relative.js.map