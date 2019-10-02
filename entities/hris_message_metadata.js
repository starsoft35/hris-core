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
let hris_message_metadata = class hris_message_metadata {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], hris_message_metadata.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "message_id"
    }),
    __metadata("design:type", Number)
], hris_message_metadata.prototype, "message_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "participant_id"
    }),
    __metadata("design:type", Number)
], hris_message_metadata.prototype, "participant_id", void 0);
__decorate([
    typeorm_1.Column("boolean", {
        nullable: false,
        name: "is_read"
    }),
    __metadata("design:type", Boolean)
], hris_message_metadata.prototype, "is_read", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 13,
        name: "uid"
    }),
    __metadata("design:type", String)
], hris_message_metadata.prototype, "uid", void 0);
hris_message_metadata = __decorate([
    typeorm_1.Entity("hris_message_metadata", { schema: "public" }),
    typeorm_1.Index("idx_b2eeb3a7537a1329", ["message_id",]),
    typeorm_1.Index("idx_b2eeb3a79d1c3019", ["participant_id",])
], hris_message_metadata);
exports.hris_message_metadata = hris_message_metadata;
//# sourceMappingURL=hris_message_metadata.js.map