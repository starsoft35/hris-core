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
let UserGroup = class UserGroup extends entity_core_props_1.EntityCoreProps {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'usergroupid',
    }),
    __metadata("design:type", Number)
], UserGroup.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: false,
        name: 'roles',
    }),
    __metadata("design:type", String)
], UserGroup.prototype, "roles", void 0);
__decorate([
    typeorm_1.ManyToMany(type => user_entity_1.User, user => user.userGroups),
    __metadata("design:type", Array)
], UserGroup.prototype, "users", void 0);
__decorate([
    typeorm_1.ManyToMany(type => user_entity_1.User, user => user.userGroups),
    __metadata("design:type", Array)
], UserGroup.prototype, "userRoles", void 0);
UserGroup = __decorate([
    typeorm_1.Entity('usergroup', { schema: 'public' })
], UserGroup);
exports.UserGroup = UserGroup;
//# sourceMappingURL=user-group.entity.js.map