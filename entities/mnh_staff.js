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
let mnh_staff = class mnh_staff {
};
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        primary: true,
        length: 510,
        name: "file_number"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "file_number", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "first_name"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "middle_name"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "middle_name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "last_name"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "last_name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "date_of_birth"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "date_of_birth", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "sex"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "sex", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "marstat"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "marstat", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "nationality"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "nationality", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "district"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "district", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "domicile"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "domicile", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "cheque_number"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "cheque_number", void 0);
__decorate([
    typeorm_1.Column("double precision", {
        nullable: true,
        precision: 53,
        name: "basic_salary"
    }),
    __metadata("design:type", Number)
], mnh_staff.prototype, "basic_salary", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "date_of_appoitment"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "date_of_appoitment", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "confirmation_date"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "confirmation_date", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "date_last_promotion"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "date_last_promotion", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "employment_status"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "employment_status", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "designation"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "designation", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "payscale"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "payscale", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "dept_name"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "dept_name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "emp_contacts"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "emp_contacts", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "next_kin_contact"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "next_kin_contact", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "next_of_kin_name"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "next_of_kin_name", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "emp_classification"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "emp_classification", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 510,
        name: "religion"
    }),
    __metadata("design:type", String)
], mnh_staff.prototype, "religion", void 0);
mnh_staff = __decorate([
    typeorm_1.Entity("mnh_staff", { schema: "public" })
], mnh_staff);
exports.mnh_staff = mnh_staff;
//# sourceMappingURL=mnh_staff.js.map