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
let hris_intergration_dhis_dataelementfieldoptionrelation = class hris_intergration_dhis_dataelementfieldoptionrelation {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "dhis_data_connection_id"
    }),
    __metadata("design:type", Number)
], hris_intergration_dhis_dataelementfieldoptionrelation.prototype, "dhis_data_connection_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "column_fieldoption_group_id"
    }),
    __metadata("design:type", Number)
], hris_intergration_dhis_dataelementfieldoptionrelation.prototype, "column_fieldoption_group_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: true,
        name: "row_fieldoption_group_id"
    }),
    __metadata("design:type", Number)
], hris_intergration_dhis_dataelementfieldoptionrelation.prototype, "row_fieldoption_group_id", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        primary: true,
        length: 16,
        name: "dataelementuid"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataelementfieldoptionrelation.prototype, "dataelementuid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "dataelementname"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataelementfieldoptionrelation.prototype, "dataelementname", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        primary: true,
        length: 16,
        name: "categorycombouid"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataelementfieldoptionrelation.prototype, "categorycombouid", void 0);
__decorate([
    typeorm_1.Column("character varying", {
        nullable: false,
        length: 255,
        name: "categorycomboname"
    }),
    __metadata("design:type", String)
], hris_intergration_dhis_dataelementfieldoptionrelation.prototype, "categorycomboname", void 0);
hris_intergration_dhis_dataelementfieldoptionrelation = __decorate([
    typeorm_1.Entity("hris_intergration_dhis_dataelementfieldoptionrelation", { schema: "public" }),
    typeorm_1.Index("idx_6902021b1bd8199f", ["column_fieldoption_group_id",]),
    typeorm_1.Index("idx_6902021bb17756c2", ["dhis_data_connection_id",]),
    typeorm_1.Index("idx_6902021bceff300e", ["row_fieldoption_group_id",])
], hris_intergration_dhis_dataelementfieldoptionrelation);
exports.hris_intergration_dhis_dataelementfieldoptionrelation = hris_intergration_dhis_dataelementfieldoptionrelation;
//# sourceMappingURL=hris_intergration_dhis_dataelementfieldoptionrelation.js.map