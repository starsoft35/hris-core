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
let hris_intergration_tiis_employee_fieldrelation = class hris_intergration_tiis_employee_fieldrelation {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "tiis_data_connection_id"
    }),
    __metadata("design:type", Number)
], hris_intergration_tiis_employee_fieldrelation.prototype, "tiis_data_connection_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "field_id"
    }),
    __metadata("design:type", Number)
], hris_intergration_tiis_employee_fieldrelation.prototype, "field_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: true,
        length: 255,
        default: () => "NULL::character varying",
        name: "columnname"
    }),
    __metadata("design:type", String)
], hris_intergration_tiis_employee_fieldrelation.prototype, "columnname", void 0);
hris_intergration_tiis_employee_fieldrelation = __decorate([
    typeorm_1.Entity("hris_intergration_tiis_employee_fieldrelation", { schema: "public" }),
    typeorm_1.Index("idx_a802e39c443707b0", ["field_id",])
], hris_intergration_tiis_employee_fieldrelation);
exports.hris_intergration_tiis_employee_fieldrelation = hris_intergration_tiis_employee_fieldrelation;
//# sourceMappingURL=hris_intergration_tiis_employee_fieldrelation.js.map