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
let hris_report = class hris_report {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_report.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_report.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "name"
    }),
    __metadata("design:type", String)
], hris_report.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "createdby"
    }),
    __metadata("design:type", String)
], hris_report.prototype, "createdby", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "uri"
    }),
    __metadata("design:type", String)
], hris_report.prototype, "uri", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: false,
        name: "parameters"
    }),
    __metadata("design:type", String)
], hris_report.prototype, "parameters", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_report.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_report.prototype, "lastupdated", void 0);
hris_report = __decorate([
    typeorm_1.Entity("hris_report", { schema: "public" })
], hris_report);
exports.hris_report = hris_report;
//# sourceMappingURL=hris_report.js.map