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
let hris_fieldoptionmerge = class hris_fieldoptionmerge {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_fieldoptionmerge.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "field_id"
    }),
    __metadata("design:type", Number)
], hris_fieldoptionmerge.prototype, "field_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "mergedfieldoption_id"
    }),
    __metadata("design:type", Number)
], hris_fieldoptionmerge.prototype, "mergedfieldoption_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_fieldoptionmerge.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "removedfieldoptionvalue"
    }),
    __metadata("design:type", String)
], hris_fieldoptionmerge.prototype, "removedfieldoptionvalue", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "removedfieldoptionuid"
    }),
    __metadata("design:type", String)
], hris_fieldoptionmerge.prototype, "removedfieldoptionuid", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_fieldoptionmerge.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_fieldoptionmerge.prototype, "lastupdated", void 0);
hris_fieldoptionmerge = __decorate([
    typeorm_1.Entity("hris_fieldoptionmerge", { schema: "public" }),
    typeorm_1.Index("idx_c45d97c3443707b0", ["field_id",]),
    typeorm_1.Index("idx_c45d97c359907821", ["mergedfieldoption_id",])
], hris_fieldoptionmerge);
exports.hris_fieldoptionmerge = hris_fieldoptionmerge;
//# sourceMappingURL=hris_fieldoptionmerge.js.map