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
let hris_message_thread = class hris_message_thread {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_message_thread.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "createdby_id"
    }),
    __metadata("design:type", Number)
], hris_message_thread.prototype, "createdby_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "subject"
    }),
    __metadata("design:type", String)
], hris_message_thread.prototype, "subject", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "createdat"
    }),
    __metadata("design:type", Date)
], hris_message_thread.prototype, "createdat", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "isspam"
    }),
    __metadata("design:type", Boolean)
], hris_message_thread.prototype, "isspam", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_message_thread.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_message_thread.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_message_thread.prototype, "lastupdated", void 0);
hris_message_thread = __decorate([
    typeorm_1.Entity("hris_message_thread", { schema: "public" }),
    typeorm_1.Index("idx_9dc9eac1f0b5af0b", ["createdby_id",])
], hris_message_thread);
exports.hris_message_thread = hris_message_thread;
//# sourceMappingURL=hris_message_thread.js.map