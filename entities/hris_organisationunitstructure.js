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
let hris_organisationunitstructure = class hris_organisationunitstructure {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitstructure.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "organisationunit_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitstructure.prototype, "organisationunit_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "level_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitstructure.prototype, "level_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "level1_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitstructure.prototype, "level1_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "level2_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitstructure.prototype, "level2_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "level3_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitstructure.prototype, "level3_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "level4_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitstructure.prototype, "level4_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "level5_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitstructure.prototype, "level5_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "level6_id"
    }),
    __metadata("design:type", Number)
], hris_organisationunitstructure.prototype, "level6_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_organisationunitstructure.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_organisationunitstructure.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_organisationunitstructure.prototype, "lastupdated", void 0);
hris_organisationunitstructure = __decorate([
    typeorm_1.Entity("hris_organisationunitstructure", { schema: "public" }),
    typeorm_1.Index("idx_f820ce269e81aa93", ["level1_id",]),
    typeorm_1.Index("idx_f820ce268c34057d", ["level2_id",]),
    typeorm_1.Index("idx_f820ce2634886218", ["level3_id",]),
    typeorm_1.Index("idx_f820ce26a95f5aa1", ["level4_id",]),
    typeorm_1.Index("idx_f820ce2611e33dc4", ["level5_id",]),
    typeorm_1.Index("idx_f820ce26356922a", ["level6_id",]),
    typeorm_1.Index("idx_f820ce265fb14ba7", ["level_id",])
], hris_organisationunitstructure);
exports.hris_organisationunitstructure = hris_organisationunitstructure;
//# sourceMappingURL=hris_organisationunitstructure.js.map