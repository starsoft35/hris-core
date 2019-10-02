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
let hris_dashboardchart = class hris_dashboardchart {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_dashboardchart.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "fieldone_id"
    }),
    __metadata("design:type", Number)
], hris_dashboardchart.prototype, "fieldone_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "fieldtwo_id"
    }),
    __metadata("design:type", Number)
], hris_dashboardchart.prototype, "fieldtwo_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "user_id"
    }),
    __metadata("design:type", Number)
], hris_dashboardchart.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_dashboardchart.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "name"
    }),
    __metadata("design:type", String)
], hris_dashboardchart.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "description"
    }),
    __metadata("design:type", String)
], hris_dashboardchart.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "graphtype"
    }),
    __metadata("design:type", String)
], hris_dashboardchart.prototype, "graphtype", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "lowerlevels"
    }),
    __metadata("design:type", Boolean)
], hris_dashboardchart.prototype, "lowerlevels", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "systemwide"
    }),
    __metadata("design:type", Boolean)
], hris_dashboardchart.prototype, "systemwide", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_dashboardchart.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_dashboardchart.prototype, "lastupdated", void 0);
hris_dashboardchart = __decorate([
    typeorm_1.Entity("hris_dashboardchart", { schema: "public" }),
    typeorm_1.Index("idx_34cd0e7e5a05b474", ["fieldone_id",]),
    typeorm_1.Index("idx_34cd0e7e315953bb", ["fieldtwo_id",]),
    typeorm_1.Index("idx_34cd0e7ea76ed395", ["user_id",])
], hris_dashboardchart);
exports.hris_dashboardchart = hris_dashboardchart;
//# sourceMappingURL=hris_dashboardchart.js.map