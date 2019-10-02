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
let hris_friendlyreport_arithmeticfilter = class hris_friendlyreport_arithmeticfilter {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "friendlyreport_id"
    }),
    __metadata("design:type", Number)
], hris_friendlyreport_arithmeticfilter.prototype, "friendlyreport_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "arithmeticfilter_id"
    }),
    __metadata("design:type", Number)
], hris_friendlyreport_arithmeticfilter.prototype, "arithmeticfilter_id", void 0);
hris_friendlyreport_arithmeticfilter = __decorate([
    typeorm_1.Entity("hris_friendlyreport_arithmeticfilter", { schema: "public" }),
    typeorm_1.Index("idx_a756de2a150b1463", ["arithmeticfilter_id",]),
    typeorm_1.Index("idx_a756de2a5bc2af53", ["friendlyreport_id",])
], hris_friendlyreport_arithmeticfilter);
exports.hris_friendlyreport_arithmeticfilter = hris_friendlyreport_arithmeticfilter;
//# sourceMappingURL=hris_friendlyreport_arithmeticfilter.js.map