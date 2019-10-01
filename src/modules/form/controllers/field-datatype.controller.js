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
const common_1 = require("@nestjs/common");
const base_contoller_1 = require("src/core/controllers/base.contoller");
const field_datatype_entity_1 = require("../entities/field-datatype.entity");
const field_data_type_service_1 = require("../services/field-data-type.service");
let FieldDatatypeController = class FieldDatatypeController extends base_contoller_1.BaseController {
    constructor(fieldDataTypeService) {
        super(fieldDataTypeService, field_datatype_entity_1.FieldDataType);
    }
};
FieldDatatypeController = __decorate([
    common_1.Controller('api/' + field_datatype_entity_1.FieldDataType.plural),
    __metadata("design:paramtypes", [field_data_type_service_1.FieldDataTypeService])
], FieldDatatypeController);
exports.FieldDatatypeController = FieldDatatypeController;
//# sourceMappingURL=field-datatype.controller.js.map