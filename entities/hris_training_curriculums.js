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
let hris_training_curriculums = class hris_training_curriculums {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_training_curriculums.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "section_id"
    }),
    __metadata("design:type", Number)
], hris_training_curriculums.prototype, "section_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "unit_id"
    }),
    __metadata("design:type", Number)
], hris_training_curriculums.prototype, "unit_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_training_curriculums.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "name"
    }),
    __metadata("design:type", String)
], hris_training_curriculums.prototype, "name", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: true,
        name: "all_methods_selected"
    }),
    __metadata("design:type", Boolean)
], hris_training_curriculums.prototype, "all_methods_selected", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_training_curriculums.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_training_curriculums.prototype, "lastupdated", void 0);
hris_training_curriculums = __decorate([
    typeorm_1.Entity("hris_training_curriculums", { schema: "public" }),
    typeorm_1.Index("idx_bf909a70d823e37a", ["section_id",]),
    typeorm_1.Index("idx_bf909a70f8bd700d", ["unit_id",])
], hris_training_curriculums);
exports.hris_training_curriculums = hris_training_curriculums;
//# sourceMappingURL=hris_training_curriculums.js.map