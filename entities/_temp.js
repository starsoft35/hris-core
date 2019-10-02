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
let _temp = class _temp {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "sn"
    }),
    __metadata("design:type", Number)
], _temp.prototype, "sn", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 255,
        name: "formula"
    }),
    __metadata("design:type", String)
], _temp.prototype, "formula", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 255,
        name: "title"
    }),
    __metadata("design:type", String)
], _temp.prototype, "title", void 0);
__decorate([
    typeorm_1.Column("double precision", {
        nullable: true,
        precision: 53,
        name: "total"
    }),
    __metadata("design:type", Number)
], _temp.prototype, "total", void 0);
_temp = __decorate([
    typeorm_1.Entity("_temp", { schema: "public" })
], _temp);
exports._temp = _temp;
//# sourceMappingURL=_temp.js.map