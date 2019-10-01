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
const training_session_entity_1 = require("./training-session.entity");
let TrainingVenue = class TrainingVenue extends entity_core_props_1.EntityCoreProps {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'trainingvenueid',
    }),
    __metadata("design:type", Number)
], TrainingVenue.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'venuename',
    }),
    __metadata("design:type", String)
], TrainingVenue.prototype, "venueName", void 0);
__decorate([
    typeorm_1.ManyToOne(type => organisation_unit_entity_1.OrganisationUnit, organisationUnit => organisationUnit.trainingVenues, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'organisationunitid' }),
    __metadata("design:type", organisation_unit_entity_1.OrganisationUnit)
], TrainingVenue.prototype, "organisationUnit", void 0);
__decorate([
    typeorm_1.OneToMany(type => training_session_entity_1.TrainingSession, trainingSession => trainingSession.venue, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], TrainingVenue.prototype, "trainingSessions", void 0);
TrainingVenue = __decorate([
    typeorm_1.Entity('trainingvenue', { schema: 'public' })
], TrainingVenue);
exports.TrainingVenue = TrainingVenue;
//# sourceMappingURL=training-venue.entity.js.map