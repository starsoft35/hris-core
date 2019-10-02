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
let hris_traininginstance = class hris_traininginstance {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_traininginstance.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "section_id"
    }),
    __metadata("design:type", Number)
], hris_traininginstance.prototype, "section_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_traininginstance.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "region"
    }),
    __metadata("design:type", Number)
], hris_traininginstance.prototype, "region", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "district"
    }),
    __metadata("design:type", Number)
], hris_traininginstance.prototype, "district", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 100,
        name: "venue"
    }),
    __metadata("design:type", String)
], hris_traininginstance.prototype, "venue", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "sponsor"
    }),
    __metadata("design:type", Number)
], hris_traininginstance.prototype, "sponsor", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "startdate"
    }),
    __metadata("design:type", Date)
], hris_traininginstance.prototype, "startdate", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "enddate"
    }),
    __metadata("design:type", Date)
], hris_traininginstance.prototype, "enddate", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_traininginstance.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_traininginstance.prototype, "lastupdated", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "unit_id"
    }),
    __metadata("design:type", Number)
], hris_traininginstance.prototype, "unit_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "curriculum_id"
    }),
    __metadata("design:type", Number)
], hris_traininginstance.prototype, "curriculum_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "organiser"
    }),
    __metadata("design:type", Number)
], hris_traininginstance.prototype, "organiser", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 100,
        default: () => "NULL::character varying",
        name: "createdby"
    }),
    __metadata("design:type", String)
], hris_traininginstance.prototype, "createdby", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "training_id"
    }),
    __metadata("design:type", Number)
], hris_traininginstance.prototype, "training_id", void 0);
hris_traininginstance = __decorate([
    typeorm_1.Entity("hris_traininginstance", { schema: "public" }),
    typeorm_1.Index("idx_1f9a830f5aea4428", ["curriculum_id",]),
    typeorm_1.Index("idx_1f9a830f31c15487", ["district",]),
    typeorm_1.Index("idx_1f9a830f96054afc", ["organiser",]),
    typeorm_1.Index("idx_1f9a830ff62f176", ["region",]),
    typeorm_1.Index("idx_1f9a830fd823e37a", ["section_id",]),
    typeorm_1.Index("idx_1f9a830f818cc9d4", ["sponsor",]),
    typeorm_1.Index("idx_1f9a830ff8bd700d", ["unit_id",])
], hris_traininginstance);
exports.hris_traininginstance = hris_traininginstance;
//# sourceMappingURL=hris_traininginstance.js.map