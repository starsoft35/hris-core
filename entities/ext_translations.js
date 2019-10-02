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
let ext_translations = class ext_translations {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], ext_translations.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 8,
        name: "locale"
    }),
    __metadata("design:type", String)
], ext_translations.prototype, "locale", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "object_class"
    }),
    __metadata("design:type", String)
], ext_translations.prototype, "object_class", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 32,
        name: "field"
    }),
    __metadata("design:type", String)
], ext_translations.prototype, "field", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "foreign_key"
    }),
    __metadata("design:type", String)
], ext_translations.prototype, "foreign_key", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "content"
    }),
    __metadata("design:type", String)
], ext_translations.prototype, "content", void 0);
ext_translations = __decorate([
    typeorm_1.Entity("ext_translations", { schema: "public" })
], ext_translations);
exports.ext_translations = ext_translations;
//# sourceMappingURL=ext_translations.js.map