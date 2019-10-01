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
const typeorm_1 = require("typeorm");
const form_entity_1 = require("../../form/entities/form.entity");
const organisation_unit_entity_1 = require("../../organisation-unit/entities/organisation-unit.entity");
const training_session_entity_1 = require("../../training/entities/training-session.entity");
const transaction_user_entity_1 = require("../../../core/entities/transaction-user.entity");
let Record = class Record extends transaction_user_entity_1.TransactionUser {
};
Record.plural = 'records';
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'recordid',
    }),
    __metadata("design:type", Number)
], Record.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => organisation_unit_entity_1.OrganisationUnit, organisationUnit => organisationUnit.records, { nullable: false, onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'organisationunitid' }),
    __metadata("design:type", organisation_unit_entity_1.OrganisationUnit)
], Record.prototype, "organisationUnit", void 0);
__decorate([
    typeorm_1.ManyToOne(type => form_entity_1.Form, form => form.records, {
        nullable: false,
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'formid' }),
    __metadata("design:type", form_entity_1.Form)
], Record.prototype, "form", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 13,
        name: 'uid',
    }),
    __metadata("design:type", String)
], Record.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'instance',
    }),
    __metadata("design:type", String)
], Record.prototype, "instance", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: false,
        name: 'value',
    }),
    __metadata("design:type", String)
], Record.prototype, "value", void 0);
__decorate([
    typeorm_1.ManyToMany(type => training_session_entity_1.TrainingSession, trainingSession => trainingSession.trainingMethods),
    __metadata("design:type", Array)
], Record.prototype, "trainingSessions", void 0);
Record = __decorate([
    typeorm_1.Entity('record', { schema: 'public' })
], Record);
exports.Record = Record;
//# sourceMappingURL=record.entity.js.map