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
let hris_participants = class hris_participants {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_participants.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 64,
        name: "username"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "username", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "firstname"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "middlename"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "middlename", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "lastname"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "lastname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "currentjobresponsibility"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "currentjobresponsibility", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "currentjobtitle"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "currentjobtitle", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "qualificationandemployement"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "qualificationandemployement", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "town"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "town", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "district"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "district", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "region"
    }),
    __metadata("design:type", String)
], hris_participants.prototype, "region", void 0);
hris_participants = __decorate([
    typeorm_1.Entity("hris_participants", { schema: "public" })
], hris_participants);
exports.hris_participants = hris_participants;
//# sourceMappingURL=hris_participants.js.map