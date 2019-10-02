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
let hris_message = class hris_message {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_message.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "thread_id"
    }),
    __metadata("design:type", Number)
], hris_message.prototype, "thread_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "user_id"
    }),
    __metadata("design:type", Number)
], hris_message.prototype, "user_id", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: false,
        name: "body"
    }),
    __metadata("design:type", String)
], hris_message.prototype, "body", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "created_at"
    }),
    __metadata("design:type", Date)
], hris_message.prototype, "created_at", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_message.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_message.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_message.prototype, "lastupdated", void 0);
hris_message = __decorate([
    typeorm_1.Entity("hris_message", { schema: "public" }),
    typeorm_1.Index("idx_b0cee96ae2904019", ["thread_id",]),
    typeorm_1.Index("idx_b0cee96aa76ed395", ["user_id",])
], hris_message);
exports.hris_message = hris_message;
//# sourceMappingURL=hris_message.js.map