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
let _resource_all_fields = class _resource_all_fields {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "instance"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "instance", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "firstname"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "middlename"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "middlename", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "surname"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "surname_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "surname_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "surname_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "surname_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "surname_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "surname_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "sex"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "sex", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "dob"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "dob", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "dob_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "dob_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "dob_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "dob_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "basic_education_level"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "basic_education_level", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "edu_evel"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "edu_evel", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "edu_evel_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "edu_evel_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "edu_evel_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "edu_evel_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "edu_evel_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "edu_evel_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "specialization"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "specialization", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "profession"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "profession", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "profession_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "profession_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "profession_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "profession_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "profession_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "profession_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "designation"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "designation", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "designation_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "designation_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "designation_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "designation_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "designation_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "designation_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "hosp_designation"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "hosp_designation", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "hosp_designation_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "hosp_designation_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "hosp_designation_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "hosp_designation_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "hosp_designation_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "hosp_designation_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "first_appointment"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "first_appointment", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "first_appointment_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "first_appointment_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "first_appointment_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "first_appointment_year", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "confirmation_date"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "confirmation_date", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "confirmation_date_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "confirmation_date_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "confirmation_date_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "confirmation_date_year", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "last_promo"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "last_promo", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "last_promo_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "last_promo_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "last_promo_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "last_promo_year", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "last_promo_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "last_promo_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "last_promo_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "last_promo_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "last_promo_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "last_promo_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "employer"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "employer", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "employment_status"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "employment_status", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "employment_status_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "employment_status_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "employment_status_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "employment_status_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "employment_status_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "employment_status_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "employment_terms"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "employment_terms", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "employment_terms_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "employment_terms_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "employment_terms_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "employment_terms_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "employment_terms_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "employment_terms_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "employmentduration"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "employmentduration", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "marital"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "marital", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "marital_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "marital_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "marital_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "marital_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "marital_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "marital_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "check_no"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "check_no", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "file_no"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "file_no", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "department"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "department", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "department_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "department_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "department_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "department_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "department_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "department_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "hosp_dept"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "hosp_dept", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "superlative"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "superlative", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "superlative_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "superlative_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "superlative_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "superlative_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "superlative_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "superlative_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "hosp_superlative_post"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "hosp_superlative_post", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "salary_scale"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "salary_scale", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "salary_scale_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "salary_scale_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "salary_scale_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "salary_scale_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "salary_scale_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "salary_scale_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "hosp_salary_scale"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "hosp_salary_scale", void 0);
__decorate([
    typeorm_1.Column("double precision", {
        nullable: true,
        precision: 53,
        name: "salary"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "salary", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "salary_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "salary_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "salary_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "salary_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "salary_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "salary_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        default: () => "NULL::character varying",
        name: "domicile"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "domicile", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        default: () => "NULL::character varying",
        name: "contact"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "contact", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        default: () => "NULL::character varying",
        name: "contact_of_next_of_kin"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "contact_of_next_of_kin", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        default: () => "NULL::character varying",
        name: "relation_next_kin"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "relation_next_kin", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "disability"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "disability", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "nationality"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "nationality", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        default: () => "NULL::character varying",
        name: "next_kin"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "next_kin", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "number_of_children"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "number_of_children", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "reg_no"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "reg_no", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "agedistribution"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "agedistribution", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "agedistribution_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "agedistribution_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "agedistribution_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "agedistribution_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "agedistribution_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "agedistribution_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "age"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "age", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "retirementdistribution"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "retirementdistribution", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "retirementdistribution_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "retirementdistribution_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "retirementdistribution_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "retirementdistribution_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "retirementdistribution_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "retirementdistribution_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "employmentdistribution"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "employmentdistribution", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "employmentdistribution_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "employmentdistribution_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "employmentdistribution_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "employmentdistribution_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "employmentdistribution_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "employmentdistribution_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "email"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "religion"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "religion", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "religion_last_updated"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "religion_last_updated", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "religion_last_updated_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "religion_last_updated_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "religion_last_updated_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "religion_last_updated_year", void 0);
__decorate([
    typeorm_1.Column("date", {
        nullable: true,
        name: "retirementdate"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "retirementdate", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "retirementdate_month_text"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "retirementdate_month_text", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "retirementdate_year"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "retirementdate_year", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "level1_mohcdgec"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "level1_mohcdgec", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "level2_categories"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "level2_categories", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "level3_regions_departments_institutions_referrals"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "level3_regions_departments_institutions_referrals", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "level4_districts_reg_hospitals"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "level4_districts_reg_hospitals", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "level5_facility"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "level5_facility", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "type"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "type", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "ownership"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "ownership", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "organisationunit_name"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "organisationunit_name", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "level"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "level", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "levelname"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "levelname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "form_name"
    }),
    __metadata("design:type", String)
], _resource_all_fields.prototype, "form_name", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "organisationunit_id"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "organisationunit_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "form_id"
    }),
    __metadata("design:type", Number)
], _resource_all_fields.prototype, "form_id", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], _resource_all_fields.prototype, "lastupdated", void 0);
_resource_all_fields = __decorate([
    typeorm_1.Entity("_resource_all_fields", { schema: "public" })
], _resource_all_fields);
exports._resource_all_fields = _resource_all_fields;
//# sourceMappingURL=_resource_all_fields.js.map