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
let hris_leave = class hris_leave {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_leave.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "record_id"
    }),
    __metadata("design:type", Number)
], hris_leave.prototype, "record_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "leave_type_id"
    }),
    __metadata("design:type", Number)
], hris_leave.prototype, "leave_type_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_leave.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "username"
    }),
    __metadata("design:type", String)
], hris_leave.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "startdate"
    }),
    __metadata("design:type", Date)
], hris_leave.prototype, "startdate", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "enddate"
    }),
    __metadata("design:type", Date)
], hris_leave.prototype, "enddate", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "duration"
    }),
    __metadata("design:type", Number)
], hris_leave.prototype, "duration", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "amount"
    }),
    __metadata("design:type", Number)
], hris_leave.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "leave_benefit_applicable"
    }),
    __metadata("design:type", String)
], hris_leave.prototype, "leave_benefit_applicable", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "leave_benefit_status"
    }),
    __metadata("design:type", String)
], hris_leave.prototype, "leave_benefit_status", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "phone"
    }),
    __metadata("design:type", String)
], hris_leave.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "address"
    }),
    __metadata("design:type", String)
], hris_leave.prototype, "address", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "email"
    }),
    __metadata("design:type", String)
], hris_leave.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "leave_destination"
    }),
    __metadata("design:type", String)
], hris_leave.prototype, "leave_destination", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
        name: "reason"
    }),
    __metadata("design:type", String)
], hris_leave.prototype, "reason", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_leave.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_leave.prototype, "lastupdated", void 0);
hris_leave = __decorate([
    typeorm_1.Entity("hris_leave", { schema: "public" }),
    typeorm_1.Index("idx_4d817b688313f474", ["leave_type_id",]),
    typeorm_1.Index("idx_4d817b684dfd750c", ["record_id",])
], hris_leave);
exports.hris_leave = hris_leave;
//# sourceMappingURL=hris_leave.js.map