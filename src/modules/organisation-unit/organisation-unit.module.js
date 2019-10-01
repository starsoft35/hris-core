"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const organisation_unit_controller_1 = require("./controllers/organisation-unit.controller");
const organisation_unit_group_set_entity_1 = require("./entities/organisation-unit-group-set.entity");
const organisation_unit_group_entity_1 = require("./entities/organisation-unit-group.entity");
const organisation_unit_entity_1 = require("./entities/organisation-unit.entity");
const organisation_unit_service_1 = require("./services/organisation-unit.service");
const organisation_unit_group_controller_1 = require("./controllers/organisation-unit-group.controller");
const organisation_unit_group_service_1 = require("./services/organisation-unit-group.service");
const organisation_unit_group_set_controller_1 = require("./controllers/organisation-unit-group-set.controller");
const organisation_unit_group_set_service_1 = require("./services/organisation-unit-group-set.service");
const organisation_unit_completeness_entity_1 = require("./entities/organisation-unit-completeness.entity");
const organisation_unit_completeness_controller_1 = require("./controllers/organisation-unit-completeness.controller");
const organisation_unit_completeness_service_1 = require("./services/organisation-unit-completeness.service");
const organisation_unit_level_entity_1 = require("./entities/organisation-unit-level.entity");
const organisation_unit_level_controller_1 = require("./controllers/organisation-unit-level.controller");
const organisation_unit_level_service_1 = require("./services/organisation-unit-level.service");
let OrganisatinUnitModule = class OrganisatinUnitModule {
};
OrganisatinUnitModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'basic', session: true }),
            typeorm_1.TypeOrmModule.forFeature([
                organisation_unit_entity_1.OrganisationUnit,
                organisation_unit_group_entity_1.OrganisationUnitGroup,
                organisation_unit_group_set_entity_1.OrganisationUnitGroupSet,
                organisation_unit_completeness_entity_1.OrganisationUnitCompleteness,
                organisation_unit_level_entity_1.OrganisationUnitLevel,
            ]),
        ],
        controllers: [
            organisation_unit_controller_1.OrganisationUnitsController,
            organisation_unit_group_controller_1.OrganisationUnitGroupController,
            organisation_unit_group_set_controller_1.OrganisationUnitGroupSetController,
            organisation_unit_completeness_controller_1.OrganisationUnitCompletenessController,
            organisation_unit_level_controller_1.OrganisationUnitLevelController,
        ],
        providers: [
            organisation_unit_service_1.OrganisationUnitService,
            organisation_unit_group_service_1.OrganisationUnitGroupService,
            organisation_unit_group_set_service_1.OrganisationUnitGroupSetService,
            organisation_unit_completeness_service_1.OrganisationUnitCompletenessService,
            organisation_unit_level_service_1.OrganisationUnitLevelService,
        ],
    })
], OrganisatinUnitModule);
exports.OrganisatinUnitModule = OrganisatinUnitModule;
//# sourceMappingURL=organisation-unit.module.js.map