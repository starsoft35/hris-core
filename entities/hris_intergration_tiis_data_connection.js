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
let hris_intergration_tiis_data_connection = class hris_intergration_tiis_data_connection {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_intergration_tiis_data_connection.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "organisationunit_id"
    }),
    __metadata("design:type", Number)
], hris_intergration_tiis_data_connection.prototype, "organisationunit_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "name"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "recordstablename"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "recordstablename", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "organisationunittablename"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "organisationunittablename", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "organisationunitlongnamecolumnname"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "organisationunitlongnamecolumnname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "organisationunitcodecolumnname"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "organisationunitcodecolumnname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "organisationunitownershipcolumnname"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "organisationunitownershipcolumnname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "recordsorganisationunitcolumnname"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "recordsorganisationunitcolumnname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "recordsinstancecolumnname"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "recordsinstancecolumnname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "tiisparentorganisationunitcode"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "tiisparentorganisationunitcode", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "hristopmostorganisationunitshrotname"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "hristopmostorganisationunitshrotname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "hrisinstituiongroupname"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "hrisinstituiongroupname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "host_url"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "host_url", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "password"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "username"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "database"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "database", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "employeeformname"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "employeeformname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "defaultnationality"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "defaultnationality", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "defaulthrnationality"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_data_connection.prototype, "defaulthrnationality", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_intergration_tiis_data_connection.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_intergration_tiis_data_connection.prototype, "lastupdated", void 0);
hris_intergration_tiis_data_connection = __decorate([
    typeorm_1.Entity("hris_intergration_tiis_data_connection", { schema: "public" }),
    typeorm_1.Index("idx_eaa7f9f983954d93", ["organisationunit_id",])
], hris_intergration_tiis_data_connection);
exports.hris_intergration_tiis_data_connection = hris_intergration_tiis_data_connection;
//# sourceMappingURL=hris_intergration_tiis_data_connection.js.map