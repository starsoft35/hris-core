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
const entity_core_props_1 = require("../../../core/entities/entity-core-props");
const typeorm_1 = require("typeorm");
let Report = class Report extends entity_core_props_1.EntityCoreProps {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'userid',
    }),
    __metadata("design:type", Number)
], Report.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'uri',
    }),
    __metadata("design:type", String)
], Report.prototype, "uri", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: false,
        name: 'parameters',
    }),
    __metadata("design:type", String)
], Report.prototype, "parameters", void 0);
Report = __decorate([
    typeorm_1.Entity('report', { schema: 'public' })
], Report);
exports.Report = Report;
//# sourceMappingURL=report.entity.js.map