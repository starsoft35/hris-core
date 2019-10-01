"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const training_curriculum_controller_1 = require("./controllers/training-curriculum.controller");
const training_method_controller_1 = require("./controllers/training-method.controller");
const training_section_controller_1 = require("./controllers/training-section.controller");
const training_session_controller_1 = require("./controllers/training-session.controller");
const training_sponsor_controller_1 = require("./controllers/training-sponsor.controller");
const training_trainers_controller_1 = require("./controllers/training-trainers.controller");
const training_unit_controller_1 = require("./controllers/training-unit.controller");
const training_venue_controller_1 = require("./controllers/training-venue.controller");
const training_curriculum_service_1 = require("./services/training-curriculum.service");
const training_method_service_1 = require("./services/training-method.service");
const training_section_service_1 = require("./services/training-section.service");
const training_session_service_1 = require("./services/training-session.service");
const training_sponsor_service_1 = require("./services/training-sponsor.service");
const training_trainers_service_1 = require("./services/training-trainers.service");
const training_unit_service_1 = require("./services/training-unit.service");
const training_venue_service_1 = require("./services/training-venue.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const training_curriculum_entity_1 = require("./entities/training-curriculum.entity");
const training_method_entity_1 = require("./entities/training-method.entity");
const training_session_entity_1 = require("./entities/training-session.entity");
const training_sponsor_entity_1 = require("./entities/training-sponsor.entity");
const training_trainer_entity_1 = require("./entities/training-trainer.entity");
const training_unit_entity_1 = require("./entities/training-unit.entity");
const training_venue_entity_1 = require("./entities/training-venue.entity");
let TrainingModule = class TrainingModule {
};
TrainingModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'basic', session: true }),
            typeorm_1.TypeOrmModule.forFeature([
                training_curriculum_entity_1.TrainingCurriculum,
                training_method_entity_1.TrainingMethod,
                training_session_entity_1.TrainingSession,
                training_sponsor_entity_1.TrainingSponsor,
                training_trainer_entity_1.TrainingTrainer,
                training_unit_entity_1.TrainingUnit,
                training_venue_entity_1.TrainingVenue,
            ]),
        ],
        controllers: [
            training_curriculum_controller_1.TrainingCurriculumController,
            training_method_controller_1.TrainingMethodController,
            training_section_controller_1.TrainingSectionController,
            training_session_controller_1.TrainingSessionController,
            training_sponsor_controller_1.TrainingSponsorController,
            training_trainers_controller_1.TrainingTrainersController,
            training_unit_controller_1.TrainingUnitController,
            training_venue_controller_1.TrainingVenueController,
        ],
        providers: [
            training_curriculum_service_1.TrainingCurriculumService,
            training_method_service_1.TrainingMethodService,
            training_section_service_1.TrainingSectionService,
            training_session_service_1.TrainingSessionService,
            training_sponsor_service_1.TrainingSponsorService,
            training_trainers_service_1.TrainingTrainersService,
            training_unit_service_1.TrainingUnitService,
            training_venue_service_1.TrainingVenueService,
        ],
    })
], TrainingModule);
exports.TrainingModule = TrainingModule;
//# sourceMappingURL=training.module.js.map