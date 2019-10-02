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
let hris_intergration_dhis_dataconnection = class hris_intergration_dhis_dataconnection {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_intergration_dhis_dataconnection.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "parent_organisationunit_id"
    }),
    __metadata("design:type", Number)
], hris_intergration_dhis_dataconnection.prototype, "parent_organisationunit_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataconnection.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "name"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataconnection.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "dataset_name"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataconnection.prototype, "dataset_name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "dataset_uid"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataconnection.prototype, "dataset_uid", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "dataset_html"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataconnection.prototype, "dataset_html", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "host_url"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataconnection.prototype, "host_url", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "username"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataconnection.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "password"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataconnection.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_intergration_dhis_dataconnection.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_intergration_dhis_dataconnection.prototype, "lastupdated", void 0);
hris_intergration_dhis_dataconnection = __decorate([
    typeorm_1.Entity("hris_intergration_dhis_dataconnection", { schema: "public" }),
    typeorm_1.Index("idx_c47f616d4108d2f5", ["parent_organisationunit_id",])
], hris_intergration_dhis_dataconnection);
exports.hris_intergration_dhis_dataconnection = hris_intergration_dhis_dataconnection;
//# sourceMappingURL=hris_intergration_dhis_dataconnection.js.map