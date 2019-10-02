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
let hris_record = class hris_record {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_record.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "organisationunit_id"
    }),
    __metadata("design:type", Number)
], hris_record.prototype, "organisationunit_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "form_id"
    }),
    __metadata("design:type", Number)
], hris_record.prototype, "form_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_record.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "instance"
    }),
    __metadata("design:type", String)
], hris_record.prototype, "instance", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: false,
        name: "value"
    }),
    __metadata("design:type", String)
], hris_record.prototype, "value", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "complete"
    }),
    __metadata("design:type", Boolean)
], hris_record.prototype, "complete", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "correct"
    }),
    __metadata("design:type", Boolean)
], hris_record.prototype, "correct", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "hashistory"
    }),
    __metadata("design:type", Boolean)
], hris_record.prototype, "hashistory", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "hastraining"
    }),
    __metadata("design:type", Boolean)
], hris_record.prototype, "hastraining", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_record.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_record.prototype, "lastupdated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "username"
    }),
    __metadata("design:type", String)
], hris_record.prototype, "username", void 0);
hris_record = __decorate([
    typeorm_1.Entity("hris_record", { schema: "public" }),
    typeorm_1.Index("idx_5e5895d45ff69b7d", ["form_id",]),
    typeorm_1.Index("idx_5e5895d483954d93", ["organisationunit_id",])
], hris_record);
exports.hris_record = hris_record;
//# sourceMappingURL=hris_record.js.map