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
let hris_intergration_dhis_fieldoptiongroupsetmember = class hris_intergration_dhis_fieldoptiongroupsetmember {
};
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "dhis_data_connection_id"
    }),
    __metadata("design:type", Number)
], hris_intergration_dhis_fieldoptiongroupsetmember.prototype, "dhis_data_connection_id", void 0);
__decorate([
    typeorm_1.Column("integer", {
        nullable: false,
        primary: true,
        name: "field_option_groupset_id"
    }),
    __metadata("design:type", Number)
], hris_intergration_dhis_fieldoptiongroupsetmember.prototype, "field_option_groupset_id", void 0);
hris_intergration_dhis_fieldoptiongroupsetmember = __decorate([
    typeorm_1.Entity("hris_intergration_dhis_fieldoptiongroupsetmember", { schema: "public" }),
    typeorm_1.Index("idx_a410d632b17756c2", ["dhis_data_connection_id",]),
    typeorm_1.Index("idx_a410d632fd950577", ["field_option_groupset_id",])
], hris_intergration_dhis_fieldoptiongroupsetmember);
exports.hris_intergration_dhis_fieldoptiongroupsetmember = hris_intergration_dhis_fieldoptiongroupsetmember;
//# sourceMappingURL=hris_intergration_dhis_fieldoptiongroupsetmember.js.map