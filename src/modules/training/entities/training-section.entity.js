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
const training_curriculum_entity_1 = require("./training-curriculum.entity");
const training_session_entity_1 = require("./training-session.entity");
const training_unit_entity_1 = require("./training-unit.entity");
let TrainingSection = class TrainingSection extends entity_core_props_1.EntityCoreProps {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], TrainingSection.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany(type => training_curriculum_entity_1.TrainingCurriculum, trainingCurriculum => trainingCurriculum.section, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], TrainingSection.prototype, "curriculums", void 0);
__decorate([
    typeorm_1.OneToMany(type => training_unit_entity_1.TrainingUnit, trainingUnit => trainingUnit.section, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], TrainingSection.prototype, "trainingUnits", void 0);
__decorate([
    typeorm_1.OneToMany(type => training_session_entity_1.TrainingSession, trainingSession => trainingSession.section, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], TrainingSection.prototype, "trainingSessions", void 0);
TrainingSection = __decorate([
    typeorm_1.Entity('trainingsections', { schema: 'public' })
], TrainingSection);
exports.TrainingSection = TrainingSection;
//# sourceMappingURL=training-section.entity.js.map