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
const training_session_entity_1 = require("./training-session.entity");
let TrainingSponsor = class TrainingSponsor extends entity_core_props_1.EntityCoreProps {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'trainingsponsorid',
    }),
    __metadata("design:type", Number)
], TrainingSponsor.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 255,
        name: 'phone',
    }),
    __metadata("design:type", String)
], TrainingSponsor.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 255,
        name: 'email',
    }),
    __metadata("design:type", String)
], TrainingSponsor.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 255,
        name: 'box',
    }),
    __metadata("design:type", String)
], TrainingSponsor.prototype, "box", void 0);
__decorate([
    typeorm_1.OneToMany(type => training_session_entity_1.TrainingSession, trainingSession => trainingSession.organiser, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], TrainingSponsor.prototype, "organiserTrainingSessions", void 0);
__decorate([
    typeorm_1.OneToMany(type => training_session_entity_1.TrainingSession, trainingSession => trainingSession.sponsor, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], TrainingSponsor.prototype, "sponsorTrainingSessions", void 0);
TrainingSponsor = __decorate([
    typeorm_1.Entity('trainingsponsor', { schema: 'public' })
], TrainingSponsor);
exports.TrainingSponsor = TrainingSponsor;
//# sourceMappingURL=training-sponsor.entity.js.map