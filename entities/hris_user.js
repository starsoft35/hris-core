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
let hris_user = class hris_user {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_user.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "organisationunit_id"
    }),
    __metadata("design:type", Number)
], hris_user.prototype, "organisationunit_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "username"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "username_canonical"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "username_canonical", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "email"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "email_canonical"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "email_canonical", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "enabled"
    }),
    __metadata("design:type", Boolean)
], hris_user.prototype, "enabled", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "salt"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "salt", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "password"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "password", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "last_login"
    }),
    __metadata("design:type", Date)
], hris_user.prototype, "last_login", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "locked"
    }),
    __metadata("design:type", Boolean)
], hris_user.prototype, "locked", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "expired"
    }),
    __metadata("design:type", Boolean)
], hris_user.prototype, "expired", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "expires_at"
    }),
    __metadata("design:type", Date)
], hris_user.prototype, "expires_at", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
        name: "confirmation_token"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "confirmation_token", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "password_requested_at"
    }),
    __metadata("design:type", Date)
], hris_user.prototype, "password_requested_at", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: false,
        name: "roles"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "roles", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "credentials_expired"
    }),
    __metadata("design:type", Boolean)
], hris_user.prototype, "credentials_expired", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "credentials_expire_at"
    }),
    __metadata("design:type", Date)
], hris_user.prototype, "credentials_expire_at", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "phonenumber"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "phonenumber", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "jobtitle"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "jobtitle", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "firstname"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "middlename"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "middlename", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 64,
        default: () => "NULL::character varying",
        name: "surname"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_user.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_user.prototype, "lastupdated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "deletedat"
    }),
    __metadata("design:type", Date)
], hris_user.prototype, "deletedat", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: true,
        name: "description"
    }),
    __metadata("design:type", String)
], hris_user.prototype, "description", void 0);
hris_user = __decorate([
    typeorm_1.Entity("hris_user", { schema: "public" }),
    typeorm_1.Index("idx_6acb86e983954d93", ["organisationunit_id",])
], hris_user);
exports.hris_user = hris_user;
//# sourceMappingURL=hris_user.js.map