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
const entity_core_props_1 = require("../../../core/entities/entity-core-props");
let UserSettings = class UserSettings extends entity_core_props_1.EntityCoreProps {
};
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'usersettingsid',
    }),
    __metadata("design:type", Number)
], UserSettings.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_entity_1.User, user => user.userSettings, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'userid' }),
    __metadata("design:type", user_entity_1.User)
], UserSettings.prototype, "user", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'emailnotification',
    }),
    __metadata("design:type", Boolean)
], UserSettings.prototype, "emailNotification", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'smsnotification',
    }),
    __metadata("design:type", Boolean)
], UserSettings.prototype, "smsNotification", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'completenessalert',
    }),
    __metadata("design:type", Boolean)
], UserSettings.prototype, "completenessAlert", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'qualitycheckalert',
    }),
    __metadata("design:type", Boolean)
], UserSettings.prototype, "qualityCheckAlert", void 0);
UserSettings = __decorate([
    typeorm_1.Entity('usersettings', { schema: 'public' })
], UserSettings);
exports.UserSettings = UserSettings;
//# sourceMappingURL=user-settings.entity.js.map