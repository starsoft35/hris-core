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
let _resource_compulsory_fields = class _resource_compulsory_fields {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], _resource_compulsory_fields.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "instance"
    }),
    __metadata("design:type", String)
], _resource_compulsory_fields.prototype, "instance", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "level1_mohsw"
    }),
    __metadata("design:type", String)
], _resource_compulsory_fields.prototype, "level1_mohsw", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "level2_categories"
    }),
    __metadata("design:type", String)
], _resource_compulsory_fields.prototype, "level2_categories", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "level3_regions_departments_institutions_referrals"
    }),
    __metadata("design:type", String)
], _resource_compulsory_fields.prototype, "level3_regions_departments_institutions_referrals", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "level4_districts_reg_hospitals"
    }),
    __metadata("design:type", String)
], _resource_compulsory_fields.prototype, "level4_districts_reg_hospitals", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "level5_facility"
    }),
    __metadata("design:type", String)
], _resource_compulsory_fields.prototype, "level5_facility", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "type"
    }),
    __metadata("design:type", String)
], _resource_compulsory_fields.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "ownership"
    }),
    __metadata("design:type", String)
], _resource_compulsory_fields.prototype, "ownership", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "organisationunit_name"
    }),
    __metadata("design:type", String)
], _resource_compulsory_fields.prototype, "organisationunit_name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "form_name"
    }),
    __metadata("design:type", String)
], _resource_compulsory_fields.prototype, "form_name", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "organisationunit_id"
    }),
    __metadata("design:type", Number)
], _resource_compulsory_fields.prototype, "organisationunit_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "form_id"
    }),
    __metadata("design:type", Number)
], _resource_compulsory_fields.prototype, "form_id", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], _resource_compulsory_fields.prototype, "lastupdated", void 0);
_resource_compulsory_fields = __decorate([
    typeorm_1.Entity("_resource_compulsory_fields", { schema: "public" })
], _resource_compulsory_fields);
exports._resource_compulsory_fields = _resource_compulsory_fields;
//# sourceMappingURL=_resource_compulsory_fields.js.map