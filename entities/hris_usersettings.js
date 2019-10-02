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
let hris_usersettings = class hris_usersettings {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_usersettings.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "user_id"
    }),
    __metadata("design:type", Number)
], hris_usersettings.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_usersettings.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "emailnotification"
    }),
    __metadata("design:type", Boolean)
], hris_usersettings.prototype, "emailnotification", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "smsnotification"
    }),
    __metadata("design:type", Boolean)
], hris_usersettings.prototype, "smsnotification", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "completenessalert"
    }),
    __metadata("design:type", Boolean)
], hris_usersettings.prototype, "completenessalert", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "qualitycheckalert"
    }),
    __metadata("design:type", Boolean)
], hris_usersettings.prototype, "qualitycheckalert", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_usersettings.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_usersettings.prototype, "lastupdated", void 0);
hris_usersettings = __decorate([
    typeorm_1.Entity("hris_usersettings", { schema: "public" })
], hris_usersettings);
exports.hris_usersettings = hris_usersettings;
//# sourceMappingURL=hris_usersettings.js.map