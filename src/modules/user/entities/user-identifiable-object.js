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
const user_entity_1 = require("./user.entity");
class UserIdentifiableObject extends entity_core_props_1.EntityCoreProps {
}
__decorate([
    typeorm_1.JoinColumn({ name: 'createdbyid' }),
    __metadata("design:type", user_entity_1.User)
], UserIdentifiableObject.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.JoinColumn({ name: 'lastupdatedbyid' }),
    __metadata("design:type", user_entity_1.User)
], UserIdentifiableObject.prototype, "lastUpdatedBy", void 0);
exports.UserIdentifiableObject = UserIdentifiableObject;
//# sourceMappingURL=user-identifiable-object.js.map