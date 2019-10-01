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
const field_option_merge_entity_1 = require("../entities/field-option-merge.entity");
const field_option_merge_service_1 = require("../services/field-option-merge.service");
const base_contoller_1 = require("src/core/controllers/base.contoller");
let FieldOptionMergeController = class FieldOptionMergeController extends base_contoller_1.BaseController {
    constructor(service) {
        super(service, field_option_merge_entity_1.FieldOptionMerge);
    }
};
FieldOptionMergeController = __decorate([
    common_1.Controller('api/' + field_option_merge_entity_1.FieldOptionMerge.plural),
    __metadata("design:paramtypes", [field_option_merge_service_1.FieldOptionMergeService])
], FieldOptionMergeController);
exports.FieldOptionMergeController = FieldOptionMergeController;
//# sourceMappingURL=field-option-merge.controller.js.map