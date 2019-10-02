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
let hris_field = class hris_field {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_field.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "datatype_id"
    }),
    __metadata("design:type", Number)
], hris_field.prototype, "datatype_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "inputtype_id"
    }),
    __metadata("design:type", Number)
], hris_field.prototype, "inputtype_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_field.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "name"
    }),
    __metadata("design:type", String)
], hris_field.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "caption"
    }),
    __metadata("design:type", String)
], hris_field.prototype, "caption", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: true,
        name: "compulsory"
    }),
    __metadata("design:type", Boolean)
], hris_field.prototype, "compulsory", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: true,
        name: "isunique"
    }),
    __metadata("design:type", Boolean)
], hris_field.prototype, "isunique", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: true,
        name: "iscalculated"
    }),
    __metadata("design:type", Boolean)
], hris_field.prototype, "iscalculated", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "description"
    }),
    __metadata("design:type", String)
], hris_field.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "calculatedexpression"
    }),
    __metadata("design:type", String)
], hris_field.prototype, "calculatedexpression", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: true,
        name: "hashistory"
    }),
    __metadata("design:type", Boolean)
], hris_field.prototype, "hashistory", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: true,
        name: "hastarget"
    }),
    __metadata("design:type", Boolean)
], hris_field.prototype, "hastarget", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: true,
        name: "fieldrelation"
    }),
    __metadata("design:type", Boolean)
], hris_field.prototype, "fieldrelation", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: true,
        name: "skipinreport"
    }),
    __metadata("design:type", Boolean)
], hris_field.prototype, "skipinreport", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_field.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_field.prototype, "lastupdated", void 0);
hris_field = __decorate([
    typeorm_1.Entity("hris_field", { schema: "public" }),
    typeorm_1.Index("idx_8dc4bee05c815a09", ["datatype_id",]),
    typeorm_1.Index("idx_8dc4bee0f0cbe24d", ["inputtype_id",])
], hris_field);
exports.hris_field = hris_field;
//# sourceMappingURL=hris_field.js.map