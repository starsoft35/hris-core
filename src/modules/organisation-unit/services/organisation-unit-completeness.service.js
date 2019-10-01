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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../core/services/base.service");
const organisation_unit_completeness_entity_1 = require("../entities/organisation-unit-completeness.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let OrganisationUnitCompletenessService = class OrganisationUnitCompletenessService extends base_service_1.BaseService {
    constructor(organisationUnitCompletenessRepository) {
        super(organisationUnitCompletenessRepository, organisation_unit_completeness_entity_1.OrganisationUnitCompleteness);
    }
};
OrganisationUnitCompletenessService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(organisation_unit_completeness_entity_1.OrganisationUnitCompleteness)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrganisationUnitCompletenessService);
exports.OrganisationUnitCompletenessService = OrganisationUnitCompletenessService;
//# sourceMappingURL=organisation-unit-completeness.service.js.map