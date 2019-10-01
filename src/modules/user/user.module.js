"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const auth_controller_1 = require("./controllers/auth.controller");
const user_controller_1 = require("./controllers/user.controller");
const user_group_entity_1 = require("./entities/user-group.entity");
const user_role_entity_1 = require("./entities/user-role.entity");
const user_settings_entity_1 = require("./entities/user-settings.entity");
const user_entity_1 = require("./entities/user.entity");
const auth_service_1 = require("./services/auth.service");
const user_service_1 = require("./services/user.service");
const roles_guard_1 = require("./guards/roles.guard");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'basic', session: true }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, user_group_entity_1.UserGroup, user_role_entity_1.UserRole, user_settings_entity_1.UserSettings]),
        ],
        controllers: [auth_controller_1.AuthController, user_controller_1.UsersController],
        providers: [user_service_1.UserService, auth_service_1.AuthService, roles_guard_1.AppAuthGuard],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map