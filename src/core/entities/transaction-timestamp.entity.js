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
const base_entity_1 = require("./base-entity");
class TransactionTimestamp extends base_entity_1.HRISBaseEntity {
    beforeInsertTransaction() {
        this.created = new Date();
        this.lastUpdated = new Date();
    }
    beforeUpdateTransaction() {
        this.lastUpdated = new Date();
    }
}
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        name: 'created',
        default: () => 'LOCALTIMESTAMP',
    }),
    __metadata("design:type", Date)
], TransactionTimestamp.prototype, "created", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        name: 'lastupdated',
        default: () => 'LOCALTIMESTAMP',
    }),
    __metadata("design:type", Date)
], TransactionTimestamp.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionTimestamp.prototype, "beforeInsertTransaction", null);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionTimestamp.prototype, "beforeUpdateTransaction", null);
exports.TransactionTimestamp = TransactionTimestamp;
//# sourceMappingURL=transaction-timestamp.entity.js.map