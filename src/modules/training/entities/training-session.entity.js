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
const organisation_unit_entity_1 = require("../../organisation-unit/entities/organisation-unit.entity");
const typeorm_1 = require("typeorm");
const training_curriculum_entity_1 = require("./training-curriculum.entity");
const training_method_entity_1 = require("./training-method.entity");
const training_section_entity_1 = require("./training-section.entity");
const training_sponsor_entity_1 = require("./training-sponsor.entity");
const training_unit_entity_1 = require("./training-unit.entity");
const training_venue_entity_1 = require("./training-venue.entity");
const record_entity_1 = require("../../record/entities/record.entity");
let TrainingSession = class TrainingSession extends entity_core_props_1.EntityCoreProps {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'trainingsessionid',
    }),
    __metadata("design:type", Number)
], TrainingSession.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => training_section_entity_1.TrainingSection, trainingSection => trainingSection.trainingSessions, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'sectionid' }),
    __metadata("design:type", training_section_entity_1.TrainingSection)
], TrainingSession.prototype, "section", void 0);
__decorate([
    typeorm_1.ManyToOne(type => organisation_unit_entity_1.OrganisationUnit, organisationunit => organisationunit.trainingSessions, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'organisationunitid' }),
    __metadata("design:type", organisation_unit_entity_1.OrganisationUnit)
], TrainingSession.prototype, "organisationUnit", void 0);
__decorate([
    typeorm_1.ManyToOne(type => training_venue_entity_1.TrainingVenue, trainingVenue => trainingVenue.trainingSessions, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'venueid' }),
    __metadata("design:type", training_venue_entity_1.TrainingVenue)
], TrainingSession.prototype, "venue", void 0);
__decorate([
    typeorm_1.ManyToOne(type => training_sponsor_entity_1.TrainingSponsor, trainingSponsor => trainingSponsor.sponsorTrainingSessions, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'sponsorid' }),
    __metadata("design:type", training_sponsor_entity_1.TrainingSponsor)
], TrainingSession.prototype, "sponsor", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'startdate',
    }),
    __metadata("design:type", Date)
], TrainingSession.prototype, "startDate", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'enddate',
    }),
    __metadata("design:type", Date)
], TrainingSession.prototype, "endDate", void 0);
__decorate([
    typeorm_1.ManyToOne(type => training_unit_entity_1.TrainingUnit, trainingUnits => trainingUnits.trainingSessions, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'unitid' }),
    __metadata("design:type", training_unit_entity_1.TrainingUnit)
], TrainingSession.prototype, "unit", void 0);
__decorate([
    typeorm_1.ManyToOne(type => training_curriculum_entity_1.TrainingCurriculum, trainingCurriculum => trainingCurriculum.trainingSessions, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'curriculumid' }),
    __metadata("design:type", training_curriculum_entity_1.TrainingCurriculum)
], TrainingSession.prototype, "curriculum", void 0);
__decorate([
    typeorm_1.ManyToOne(type => training_sponsor_entity_1.TrainingSponsor, trainingSponsor => trainingSponsor.organiserTrainingSessions, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'organiserid' }),
    __metadata("design:type", training_sponsor_entity_1.TrainingSponsor)
], TrainingSession.prototype, "organiser", void 0);
__decorate([
    typeorm_1.ManyToMany(type => training_method_entity_1.TrainingMethod, trainingMethod => trainingMethod.trainingSessions, { nullable: false }),
    typeorm_1.JoinTable({ name: 'trainingsessionmethods' }),
    __metadata("design:type", Array)
], TrainingSession.prototype, "trainingMethods", void 0);
__decorate([
    typeorm_1.ManyToMany(type => record_entity_1.Record, record => record.trainingSessions, { nullable: false }),
    typeorm_1.JoinTable({ name: 'recordtrainingsession' }),
    __metadata("design:type", Array)
], TrainingSession.prototype, "records", void 0);
TrainingSession = __decorate([
    typeorm_1.Entity('trainingsession', { schema: 'public' })
], TrainingSession);
exports.TrainingSession = TrainingSession;
//# sourceMappingURL=training-session.entity.js.map