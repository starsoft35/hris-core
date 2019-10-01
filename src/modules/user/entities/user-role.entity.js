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
const user_entity_1 = require("./user.entity");
const user_group_entity_1 = require("./user-group.entity");
const user_identifiable_object_1 = require("./user-identifiable-object");
let UserRole = class UserRole extends user_identifiable_object_1.UserIdentifiableObject {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'userroleid',
    }),
    __metadata("design:type", Number)
], UserRole.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 64,
        name: 'name',
    }),
    __metadata("design:type", String)
], UserRole.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(type => user_entity_1.User, user => user.userRoles),
    __metadata("design:type", Array)
], UserRole.prototype, "users", void 0);
__decorate([
    typeorm_1.ManyToMany(type => user_group_entity_1.UserGroup, userGroup => userGroup.userRoles, {
        nullable: false,
    }),
    typeorm_1.JoinTable({ name: 'userrolegroupmembers' }),
    __metadata("design:type", Array)
], UserRole.prototype, "userGroups", void 0);
UserRole = __decorate([
    typeorm_1.Entity('userrole', { schema: 'public' })
], UserRole);
exports.UserRole = UserRole;
//# sourceMappingURL=user-role.entity.js.map