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
let hris_form_fieldmembers = class hris_form_fieldmembers {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "form_id"
    }),
    __metadata("design:type", Number)
], hris_form_fieldmembers.prototype, "form_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "field_id"
    }),
    __metadata("design:type", Number)
], hris_form_fieldmembers.prototype, "field_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "sort"
    }),
    __metadata("design:type", Number)
], hris_form_fieldmembers.prototype, "sort", void 0);
hris_form_fieldmembers = __decorate([
    typeorm_1.Entity("hris_form_fieldmembers", { schema: "public" }),
    typeorm_1.Index("idx_c4bcec9b443707b0", ["field_id",]),
    typeorm_1.Index("idx_c4bcec9b5ff69b7d", ["form_id",])
], hris_form_fieldmembers);
exports.hris_form_fieldmembers = hris_form_fieldmembers;
//# sourceMappingURL=hris_form_fieldmembers.js.map