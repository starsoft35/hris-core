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
let hris_resourcetable_fieldmembers = class hris_resourcetable_fieldmembers {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "resourcetable_id"
    }),
    __metadata("design:type", Number)
], hris_resourcetable_fieldmembers.prototype, "resourcetable_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "field_id"
    }),
    __metadata("design:type", Number)
], hris_resourcetable_fieldmembers.prototype, "field_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "sort"
    }),
    __metadata("design:type", Number)
], hris_resourcetable_fieldmembers.prototype, "sort", void 0);
hris_resourcetable_fieldmembers = __decorate([
    typeorm_1.Entity("hris_resourcetable_fieldmembers", { schema: "public" }),
    typeorm_1.Index("idx_f68dc8b7443707b0", ["field_id",]),
    typeorm_1.Index("idx_f68dc8b7c5172ec9", ["resourcetable_id",])
], hris_resourcetable_fieldmembers);
exports.hris_resourcetable_fieldmembers = hris_resourcetable_fieldmembers;
//# sourceMappingURL=hris_resourcetable_fieldmembers.js.map