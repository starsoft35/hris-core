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
let hris_field_relation = class hris_field_relation {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "parent_field"
    }),
    __metadata("design:type", Number)
], hris_field_relation.prototype, "parent_field", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "child_field"
    }),
    __metadata("design:type", Number)
], hris_field_relation.prototype, "child_field", void 0);
hris_field_relation = __decorate([
    typeorm_1.Entity("hris_field_relation", { schema: "public" }),
    typeorm_1.Index("idx_2f7ffbc98f3e7cb", ["child_field",]),
    typeorm_1.Index("idx_2f7ffbc997c4d1fb", ["parent_field",])
], hris_field_relation);
exports.hris_field_relation = hris_field_relation;
//# sourceMappingURL=hris_field_relation.js.map