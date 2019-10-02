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
let sqlview = class sqlview {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: "integer",
        name: "id"
    }),
    __metadata("design:type", Number)
], sqlview.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        unique: true,
        length: 128,
        name: "title"
    }),
    __metadata("design:type", String)
], sqlview.prototype, "title", void 0);
__decorate([
    typeorm_1.Column("text", {
        nullable: false,
        unique: true,
        name: "query"
    }),
    __metadata("design:type", String)
], sqlview.prototype, "query", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "now()",
        name: "createdat"
    }),
    __metadata("design:type", Date)
], sqlview.prototype, "createdat", void 0);
__decorate([
    typeorm_1.Column("timestamp without time zone", {
        nullable: true,
        default: () => "now()",
        name: "updatedat"
    }),
    __metadata("design:type", Date)
], sqlview.prototype, "updatedat", void 0);
sqlview = __decorate([
    typeorm_1.Entity("sqlview", { schema: "public" }),
    typeorm_1.Index("sqlview_query_key", ["query",], { unique: true }),
    typeorm_1.Index("sqlview_title_key", ["title",], { unique: true })
], sqlview);
exports.sqlview = sqlview;
//# sourceMappingURL=sqlview.js.map