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
let hris_message_thread_metadata = class hris_message_thread_metadata {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_message_thread_metadata.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "thread_id"
    }),
    __metadata("design:type", Number)
], hris_message_thread_metadata.prototype, "thread_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "participant_id"
    }),
    __metadata("design:type", Number)
], hris_message_thread_metadata.prototype, "participant_id", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "is_deleted"
    }),
    __metadata("design:type", Boolean)
], hris_message_thread_metadata.prototype, "is_deleted", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "last_participant_message_date"
    }),
    __metadata("design:type", Date)
], hris_message_thread_metadata.prototype, "last_participant_message_date", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "last_message_date"
    }),
    __metadata("design:type", Date)
], hris_message_thread_metadata.prototype, "last_message_date", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_message_thread_metadata.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: false,
        name: "datecreated"
    }),
    __metadata("design:type", Date)
], hris_message_thread_metadata.prototype, "datecreated", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "NULL::timestamp without time zone",
        name: "lastupdated"
    }),
    __metadata("design:type", Date)
], hris_message_thread_metadata.prototype, "lastupdated", void 0);
hris_message_thread_metadata = __decorate([
    typeorm_1.Entity("hris_message_thread_metadata", { schema: "public" }),
    typeorm_1.Index("idx_240580139d1c3019", ["participant_id",]),
    typeorm_1.Index("idx_24058013e2904019", ["thread_id",])
], hris_message_thread_metadata);
exports.hris_message_thread_metadata = hris_message_thread_metadata;
//# sourceMappingURL=hris_message_thread_metadata.js.map