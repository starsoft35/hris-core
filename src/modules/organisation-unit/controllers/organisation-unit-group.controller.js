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
const base_contoller_1 = require("../../../core/controllers/base.contoller");
const organisation_unit_group_entity_1 = require("../entities/organisation-unit-group.entity");
const organisation_unit_group_service_1 = require("../services/organisation-unit-group.service");
let OrganisationUnitGroupController = class OrganisationUnitGroupController extends base_contoller_1.BaseController {
    constructor(organisationUnitGroupService) {
        super(organisationUnitGroupService, organisation_unit_group_entity_1.OrganisationUnitGroup);
    }
};
OrganisationUnitGroupController = __decorate([
    common_1.Controller('api/' + organisation_unit_group_entity_1.OrganisationUnitGroup.plural),
    __metadata("design:paramtypes", [organisation_unit_group_service_1.OrganisationUnitGroupService])
], OrganisationUnitGroupController);
exports.OrganisationUnitGroupController = OrganisationUnitGroupController;
//# sourceMappingURL=organisation-unit-group.controller.js.map