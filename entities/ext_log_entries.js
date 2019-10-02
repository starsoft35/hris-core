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
let ext_log_entries = class ext_log_entries {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], ext_log_entries.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 8,
        name: "action"
    }),
    __metadata("design:type", String)
], ext_log_entries.prototype, "action", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "logged_at"
    }),
    __metadata("design:type", Date)
], ext_log_entries.prototype, "logged_at", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "object_id"
    }),
    __metadata("design:type", String)
], ext_log_entries.prototype, "object_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "object_class"
    }),
    __metadata("design:type", String)
], ext_log_entries.prototype, "object_class", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "version"
    }),
    __metadata("design:type", Number)
], ext_log_entries.prototype, "version", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "data"
    }),
    __metadata("design:type", String)
], ext_log_entries.prototype, "data", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
        name: "username"
    }),
    __metadata("design:type", String)
], ext_log_entries.prototype, "username", void 0);
ext_log_entries = __decorate([
    typeorm_1.Entity("ext_log_entries", { schema: "public" }),
    typeorm_1.Index("log_class_lookup_idx", ["object_class",])
], ext_log_entries);
exports.ext_log_entries = ext_log_entries;
//# sourceMappingURL=ext_log_entries.js.map