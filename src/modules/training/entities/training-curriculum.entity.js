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
const training_method_entity_1 = require("./training-method.entity");
const training_section_entity_1 = require("./training-section.entity");
const training_session_entity_1 = require("./training-session.entity");
const training_unit_entity_1 = require("./training-unit.entity");
let TrainingCurriculum = class TrainingCurriculum extends entity_core_props_1.EntityCoreProps {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'trainingcurriculumid',
    }),
    __metadata("design:type", Number)
], TrainingCurriculum.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => training_section_entity_1.TrainingSection, trainingSection => trainingSection.curriculums, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'sectionid' }),
    __metadata("design:type", training_section_entity_1.TrainingSection)
], TrainingCurriculum.prototype, "section", void 0);
__decorate([
    typeorm_1.ManyToOne(type => training_unit_entity_1.TrainingUnit, trainingUnit => trainingUnit.trainingCurriculums, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'unitid' }),
    __metadata("design:type", training_unit_entity_1.TrainingUnit)
], TrainingCurriculum.prototype, "unit", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: true,
        name: 'allmethodsselected',
    }),
    __metadata("design:type", Boolean)
], TrainingCurriculum.prototype, "allMethodsSelected", void 0);
__decorate([
    typeorm_1.OneToMany(type => training_session_entity_1.TrainingSession, trainingSession => trainingSession.curriculum, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], TrainingCurriculum.prototype, "trainingSessions", void 0);
__decorate([
    typeorm_1.ManyToMany(type => training_method_entity_1.TrainingMethod, trainingMethod => trainingMethod.trainingCurriculums, { nullable: false }),
    typeorm_1.JoinTable({ name: 'trainingcurriculummethodmember' }),
    __metadata("design:type", Array)
], TrainingCurriculum.prototype, "trainingMethods", void 0);
TrainingCurriculum = __decorate([
    typeorm_1.Entity('trainingcurriculum', { schema: 'public' })
], TrainingCurriculum);
exports.TrainingCurriculum = TrainingCurriculum;
//# sourceMappingURL=training-curriculum.entity.js.map