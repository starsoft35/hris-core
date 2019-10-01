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
let TrainingTrainer = class TrainingTrainer extends entity_core_props_1.EntityCoreProps {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'trainingtrainerid',
    }),
    __metadata("design:type", Number)
], TrainingTrainer.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'firstname',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'middlename',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "middleName", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'lastname',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'primaryjobresponsibility',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "primaryJobResponsibility", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'secondaryjobresponsibility',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "secondaryJobResponsibility", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'profession',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "profession", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'currentjobtitle',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "currentJobTitle", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'placeofwork',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "placeOfWork", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'organisationtype',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "organisationType", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'trainertype',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "trainerType", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'trainerlanguage',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "trainerLanguage", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'traineraffiliation',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "trainerAffiliation", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'experience',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "experience", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'highestlevelofqualification',
    }),
    __metadata("design:type", String)
], TrainingTrainer.prototype, "highestLevelOfQualification", void 0);
TrainingTrainer = __decorate([
    typeorm_1.Entity('trainingtrainer', { schema: 'public' })
], TrainingTrainer);
exports.TrainingTrainer = TrainingTrainer;
//# sourceMappingURL=training-trainer.entity.js.map