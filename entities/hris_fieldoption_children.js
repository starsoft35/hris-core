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
let hris_fieldoption_children = class hris_fieldoption_children {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "parent_fieldoption"
    }),
    __metadata("design:type", Number)
], hris_fieldoption_children.prototype, "parent_fieldoption", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "child_fieldoption"
    }),
    __metadata("design:type", Number)
], hris_fieldoption_children.prototype, "child_fieldoption", void 0);
hris_fieldoption_children = __decorate([
    typeorm_1.Entity("hris_fieldoption_children", { schema: "public" }),
    typeorm_1.Index("idx_4d513bb4219d1df9", ["child_fieldoption",]),
    typeorm_1.Index("idx_4d513bb4903568a7", ["parent_fieldoption",])
], hris_fieldoption_children);
exports.hris_fieldoption_children = hris_fieldoption_children;
//# sourceMappingURL=hris_fieldoption_children.js.map