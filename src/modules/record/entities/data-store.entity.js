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
const user_identifiable_object_1 = require("../../user/entities/user-identifiable-object");
let DataStore = class DataStore extends user_identifiable_object_1.UserIdentifiableObject {
};
DataStore.plural = 'dataStore';
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'datastoreid',
    }),
    __metadata("design:type", Number)
], DataStore.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'namespace',
    }),
    __metadata("design:type", String)
], DataStore.prototype, "namespace", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'key',
    }),
    __metadata("design:type", String)
], DataStore.prototype, "key", void 0);
__decorate([
    typeorm_1.Column('json', {
        nullable: false,
        name: 'value',
    }),
    __metadata("design:type", Object)
], DataStore.prototype, "value", void 0);
DataStore = __decorate([
    typeorm_1.Entity('datastore', { schema: 'public' })
], DataStore);
exports.DataStore = DataStore;
//# sourceMappingURL=data-store.entity.js.map