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
const utils_1 = require("@iapps/utils/utils");
const transaction_timestamp_entity_1 = require("./transaction-timestamp.entity");
class EntityCoreProps extends transaction_timestamp_entity_1.TransactionTimestamp {
    beforeInsertEntityCoreProps() {
        /**
         *  You can generate UUID in different ways
         *  1. You can generate uuid of any length: i.e getUid('', 20)
         *      Example of UUID::: 8aydSxYBrrP
         *  2. You can generat UUID by prepending a context specific keyword i.e getUid('HRIS', 20)
         *      Example of UUID::: HRIS_8aydSxYBrrP
         */
        this.uid = utils_1.getUid('', 11);
        // ! Generating UUID is DEPRECATED
        // this.uid = uuid();
        // this.uid = this.uid.split('-').join('');
        // this.uid = this.uid.substr(0, 13);
        // ! Generating UUID is DEPRECATED
    }
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EntityCoreProps.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 256, unique: true }),
    __metadata("design:type", String)
], EntityCoreProps.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        nullable: true,
        length: 25,
        default: () => 'NULL::varchar',
    }),
    __metadata("design:type", String)
], EntityCoreProps.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 256 }),
    __metadata("design:type", String)
], EntityCoreProps.prototype, "name", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntityCoreProps.prototype, "beforeInsertEntityCoreProps", null);
exports.EntityCoreProps = EntityCoreProps;
//# sourceMappingURL=entity-core-props.js.map