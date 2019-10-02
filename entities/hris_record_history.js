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
let hris_record_history = class hris_record_history {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_record_history.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "record_id"
    }),
    __metadata("design:type", Number)
], hris_record_history.prototype, "record_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "field_id"
    }),
    __metadata("design:type", Number)
], hris_record_history.prototype, "field_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_record_history.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "history"
    }),
    __metadata("design:type", String)
], hris_record_history.prototype, "history", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
        name: "reason"
    }),
    __metadata("design:type", String)
], hris_record_history.prototype, "reason", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "startdate"
    }),
    __metadata("design:type", Date)
], hris_record_history.prototype, "startdate", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "username"
    }),
    __metadata("design:type", String)
], hris_record_history.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_record_history.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_record_history.prototype, "lastupdated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "enddate"
    }),
    __metadata("design:type", Date)
], hris_record_history.prototype, "enddate", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
        name: "entitled_payment"
    }),
    __metadata("design:type", String)
], hris_record_history.prototype, "entitled_payment", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "organisationunit_id"
    }),
    __metadata("design:type", Number)
], hris_record_history.prototype, "organisationunit_id", void 0);
hris_record_history = __decorate([
    typeorm_1.Entity("hris_record_history", { schema: "public" }),
    typeorm_1.Index("idx_bab4b7b443707b0", ["field_id",]),
    typeorm_1.Index("idx_bab4b7b4dfd750c", ["record_id",])
], hris_record_history);
exports.hris_record_history = hris_record_history;
//# sourceMappingURL=hris_record_history.js.map