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
let hris_help_topic_chapters = class hris_help_topic_chapters {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "topic_id"
    }),
    __metadata("design:type", Number)
], hris_help_topic_chapters.prototype, "topic_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "chapter_id"
    }),
    __metadata("design:type", Number)
], hris_help_topic_chapters.prototype, "chapter_id", void 0);
hris_help_topic_chapters = __decorate([
    typeorm_1.Entity("hris_help_topic_chapters", { schema: "public" }),
    typeorm_1.Index("idx_36f8f0fb579f4768", ["chapter_id",]),
    typeorm_1.Index("idx_36f8f0fb1f55203d", ["topic_id",])
], hris_help_topic_chapters);
exports.hris_help_topic_chapters = hris_help_topic_chapters;
//# sourceMappingURL=hris_help_topic_chapters.js.map