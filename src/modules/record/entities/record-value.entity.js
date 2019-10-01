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
const record_entity_1 = require("./record.entity");
const transaction_user_entity_1 = require("../../../core/entities/transaction-user.entity");
let RecordValue = class RecordValue extends transaction_user_entity_1.TransactionUser {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'recordvalueid',
    }),
    __metadata("design:type", Number)
], RecordValue.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => record_entity_1.Record, record => record.id, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'recordid' }),
    __metadata("design:type", record_entity_1.Record)
], RecordValue.prototype, "record", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: false,
        name: 'value',
    }),
    __metadata("design:type", String)
], RecordValue.prototype, "value", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: false,
        name: 'startdate',
    }),
    __metadata("design:type", Date)
], RecordValue.prototype, "startDate", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'enddate',
    }),
    __metadata("design:type", Date)
], RecordValue.prototype, "endDate", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 255,
        default: () => 'NULL::character varying',
        name: 'comment',
    }),
    __metadata("design:type", String)
], RecordValue.prototype, "comment", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 255,
        default: () => 'NULL::character varying',
        name: 'entitledpayment',
    }),
    __metadata("design:type", String)
], RecordValue.prototype, "entitledPayment", void 0);
RecordValue = __decorate([
    typeorm_1.Entity('recordvalue', { schema: 'public' })
], RecordValue);
exports.RecordValue = RecordValue;
//# sourceMappingURL=record-value.entity.js.map