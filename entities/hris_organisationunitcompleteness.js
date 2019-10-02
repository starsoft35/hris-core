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
let hris_organisationunitcompleteness = class hris_organisationunitcompleteness {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitcompleteness.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "organisationunit_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitcompleteness.prototype, "organisationunit_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "form_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitcompleteness.prototype, "form_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_organisationunitcompleteness.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "expectation"
    }),
    __metadata("design:type", Number)
], hris_organisationunitcompleteness.prototype, "expectation", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_organisationunitcompleteness.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_organisationunitcompleteness.prototype, "lastupdated", void 0);
hris_organisationunitcompleteness = __decorate([
    typeorm_1.Entity("hris_organisationunitcompleteness", { schema: "public" }),
    typeorm_1.Index("idx_e57d91715ff69b7d", ["form_id",]),
    typeorm_1.Index("idx_e57d917183954d93", ["organisationunit_id",])
], hris_organisationunitcompleteness);
exports.hris_organisationunitcompleteness = hris_organisationunitcompleteness;
//# sourceMappingURL=hris_organisationunitcompleteness.js.map