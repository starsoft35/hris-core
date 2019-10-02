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
let hris_organisationunit = class hris_organisationunit {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_organisationunit.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "parent_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunit.prototype, "parent_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 11,
        default: () => "NULL::character varying",
        name: "dhisuid"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "dhisuid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 25,
        default: () => "NULL::character varying",
        name: "code"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "code", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 20,
        name: "shortname"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "shortname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "longname"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "longname", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: true,
        name: "active"
    }),
    __metadata("design:type", Boolean)
], hris_organisationunit.prototype, "active", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "openingdate"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "openingdate", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "closingdate"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "closingdate", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
        name: "geocode"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "geocode", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "coordinates"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "coordinates", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 20,
        default: () => "NULL::character varying",
        name: "featuretype"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "featuretype", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "address"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "address", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 150,
        default: () => "NULL::character varying",
        name: "email"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 150,
        default: () => "NULL::character varying",
        name: "phonenumber"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "phonenumber", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 150,
        default: () => "NULL::character varying",
        name: "contactperson"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "contactperson", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "description"
    }),
    __metadata("design:type", String)
], hris_organisationunit.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_organisationunit.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_organisationunit.prototype, "lastupdated", void 0);
hris_organisationunit = __decorate([
    typeorm_1.Entity("hris_organisationunit", { schema: "public" }),
    typeorm_1.Index("idx_93942222727aca70", ["parent_id",])
], hris_organisationunit);
exports.hris_organisationunit = hris_organisationunit;
//# sourceMappingURL=hris_organisationunit.js.map