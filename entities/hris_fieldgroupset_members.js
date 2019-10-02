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
let hris_fieldgroupset_members = class hris_fieldgroupset_members {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "fieldgroupset_id"
    }),
    __metadata("design:type", Number)
], hris_fieldgroupset_members.prototype, "fieldgroupset_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "fieldgroup_id"
    }),
    __metadata("design:type", Number)
], hris_fieldgroupset_members.prototype, "fieldgroup_id", void 0);
hris_fieldgroupset_members = __decorate([
    typeorm_1.Entity("hris_fieldgroupset_members", { schema: "public" }),
    typeorm_1.Index("idx_40455edf64381d9a", ["fieldgroup_id",]),
    typeorm_1.Index("idx_40455edfa42c5323", ["fieldgroupset_id",])
], hris_fieldgroupset_members);
exports.hris_fieldgroupset_members = hris_fieldgroupset_members;
//# sourceMappingURL=hris_fieldgroupset_members.js.map