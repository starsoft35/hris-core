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
let hris_indicator_targetfieldoption = class hris_indicator_targetfieldoption {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "target_id"
    }),
    __metadata("design:type", Number)
], hris_indicator_targetfieldoption.prototype, "target_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "fieldoption_id"
    }),
    __metadata("design:type", Number)
], hris_indicator_targetfieldoption.prototype, "fieldoption_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "value"
    }),
    __metadata("design:type", Number)
], hris_indicator_targetfieldoption.prototype, "value", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "max_value"
    }),
    __metadata("design:type", Number)
], hris_indicator_targetfieldoption.prototype, "max_value", void 0);
hris_indicator_targetfieldoption = __decorate([
    typeorm_1.Entity("hris_indicator_targetfieldoption", { schema: "public" }),
    typeorm_1.Index("idx_e7321b205f3cdfc2", ["fieldoption_id",]),
    typeorm_1.Index("idx_e7321b20158e0b66", ["target_id",])
], hris_indicator_targetfieldoption);
exports.hris_indicator_targetfieldoption = hris_indicator_targetfieldoption;
//# sourceMappingURL=hris_indicator_targetfieldoption.js.map