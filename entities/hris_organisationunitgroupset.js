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
let hris_organisationunitgroupset = class hris_organisationunitgroupset {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitgroupset.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_organisationunitgroupset.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 11,
        default: () => "NULL::character varying",
        name: "dhisuid"
    }),
    __metadata("design:type", String)
], hris_organisationunitgroupset.prototype, "dhisuid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "name"
    }),
    __metadata("design:type", String)
], hris_organisationunitgroupset.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
        name: "description"
    }),
    __metadata("design:type", String)
], hris_organisationunitgroupset.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "compulsory"
    }),
    __metadata("design:type", Boolean)
], hris_organisationunitgroupset.prototype, "compulsory", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 50,
        default: () => "NULL::character varying",
        name: "code"
    }),
    __metadata("design:type", String)
], hris_organisationunitgroupset.prototype, "code", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_organisationunitgroupset.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_organisationunitgroupset.prototype, "lastupdated", void 0);
hris_organisationunitgroupset = __decorate([
    typeorm_1.Entity("hris_organisationunitgroupset", { schema: "public" })
], hris_organisationunitgroupset);
exports.hris_organisationunitgroupset = hris_organisationunitgroupset;
//# sourceMappingURL=hris_organisationunitgroupset.js.map