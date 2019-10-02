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
let hris_dashboardchart_formmembers = class hris_dashboardchart_formmembers {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "dashboardchart_id"
    }),
    __metadata("design:type", Number)
], hris_dashboardchart_formmembers.prototype, "dashboardchart_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "form_id"
    }),
    __metadata("design:type", Number)
], hris_dashboardchart_formmembers.prototype, "form_id", void 0);
hris_dashboardchart_formmembers = __decorate([
    typeorm_1.Entity("hris_dashboardchart_formmembers", { schema: "public" }),
    typeorm_1.Index("idx_81513e0f7b540d5a", ["dashboardchart_id",]),
    typeorm_1.Index("idx_81513e0f5ff69b7d", ["form_id",])
], hris_dashboardchart_formmembers);
exports.hris_dashboardchart_formmembers = hris_dashboardchart_formmembers;
//# sourceMappingURL=hris_dashboardchart_formmembers.js.map