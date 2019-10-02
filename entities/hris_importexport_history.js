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
let hris_importexport_history = class hris_importexport_history {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_importexport_history.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_importexport_history.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "session_type"
    }),
    __metadata("design:type", String)
], hris_importexport_history.prototype, "session_type", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "object"
    }),
    __metadata("design:type", String)
], hris_importexport_history.prototype, "object", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "status"
    }),
    __metadata("design:type", String)
], hris_importexport_history.prototype, "status", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        name: "count"
    }),
    __metadata("design:type", Number)
], hris_importexport_history.prototype, "count", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "username"
    }),
    __metadata("design:type", String)
], hris_importexport_history.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "starttime"
    }),
    __metadata("design:type", Date)
], hris_importexport_history.prototype, "starttime", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "finishtime"
    }),
    __metadata("design:type", Date)
], hris_importexport_history.prototype, "finishtime", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_importexport_history.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_importexport_history.prototype, "lastupdated", void 0);
hris_importexport_history = __decorate([
    typeorm_1.Entity("hris_importexport_history", { schema: "public" })
], hris_importexport_history);
exports.hris_importexport_history = hris_importexport_history;
//# sourceMappingURL=hris_importexport_history.js.map