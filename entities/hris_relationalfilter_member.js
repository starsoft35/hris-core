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
let hris_relationalfilter_member = class hris_relationalfilter_member {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "relationalfilter_id"
    }),
    __metadata("design:type", Number)
], hris_relationalfilter_member.prototype, "relationalfilter_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "fieldoption_id"
    }),
    __metadata("design:type", Number)
], hris_relationalfilter_member.prototype, "fieldoption_id", void 0);
hris_relationalfilter_member = __decorate([
    typeorm_1.Entity("hris_relationalfilter_member", { schema: "public" }),
    typeorm_1.Index("idx_bf17240a5f3cdfc2", ["fieldoption_id",]),
    typeorm_1.Index("idx_bf17240a8dc1907b", ["relationalfilter_id",])
], hris_relationalfilter_member);
exports.hris_relationalfilter_member = hris_relationalfilter_member;
//# sourceMappingURL=hris_relationalfilter_member.js.map