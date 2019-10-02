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
let hris_organisationunitgroup = class hris_organisationunitgroup {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitgroup.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "organisationunitgroupset_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitgroup.prototype, "organisationunitgroupset_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_organisationunitgroup.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "name"
    }),
    __metadata("design:type", String)
], hris_organisationunitgroup.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "description"
    }),
    __metadata("design:type", String)
], hris_organisationunitgroup.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 11,
        default: () => "NULL::character varying",
        name: "dhisuid"
    }),
    __metadata("design:type", String)
], hris_organisationunitgroup.prototype, "dhisuid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 50,
        default: () => "NULL::character varying",
        name: "code"
    }),
    __metadata("design:type", String)
], hris_organisationunitgroup.prototype, "code", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_organisationunitgroup.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_organisationunitgroup.prototype, "lastupdated", void 0);
hris_organisationunitgroup = __decorate([
    typeorm_1.Entity("hris_organisationunitgroup", { schema: "public" }),
    typeorm_1.Index("idx_7c8c96e13c4f988f", ["organisationunitgroupset_id",])
], hris_organisationunitgroup);
exports.hris_organisationunitgroup = hris_organisationunitgroup;
//# sourceMappingURL=hris_organisationunitgroup.js.map