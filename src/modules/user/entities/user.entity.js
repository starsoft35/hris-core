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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var User_1;
Object.defineProperty(exports, "__esModule", { value: true });
const organisation_unit_entity_1 = require("../../organisation-unit/entities/organisation-unit.entity");
const typeorm_1 = require("typeorm");
const dashboard_chart_entity_1 = require("../../dashboard/entities/dashboard-chart.entity");
const form_entity_1 = require("../../form/entities/form.entity");
const message_metadata_entity_1 = require("../../message/entities/message-metadata.entity");
const message_thread_metadata_entity_1 = require("../../message/entities/message-thread-metadata.entity");
const message_thread_entity_1 = require("../../message/entities/message-thread.entity");
const message_entity_1 = require("../../message/entities/message.entity");
const user_group_entity_1 = require("./user-group.entity");
const user_role_entity_1 = require("./user-role.entity");
const user_settings_entity_1 = require("./user-settings.entity");
const user_identifiable_object_1 = require("./user-identifiable-object");
let User = User_1 = class User extends user_identifiable_object_1.UserIdentifiableObject {
    static authenticateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.authenticateUserByToken(User_1.getBase64(user.username, user.password));
        });
    }
    static authenticateUserByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            let u;
            u = yield User_1.findOne({
                where: { token },
            });
            console.log('User:', u);
            if (u) {
                delete u.token;
                return u;
            }
        });
    }
    static getBase64(username, password) {
        return Buffer.from(username + ':' + password).toString('base64');
    }
    createToken() {
        this.token = User_1.getBase64(this.username, this.password);
        this.enabled = true;
    }
};
User.plural = 'users';
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        name: 'userid',
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        unique: true,
        length: 255,
        name: 'username',
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'email',
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'enabled',
    }),
    __metadata("design:type", Boolean)
], User.prototype, "enabled", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'lastlogin',
    }),
    __metadata("design:type", Date)
], User.prototype, "lastLogin", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'expirydate',
    }),
    __metadata("design:type", Date)
], User.prototype, "expirydate", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 255,
        default: () => 'NULL::character varying',
        name: 'token',
    }),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 64,
        default: () => 'NULL::character varying',
        name: 'phonenumber',
    }),
    __metadata("design:type", String)
], User.prototype, "phonenumber", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 64,
        default: () => 'NULL::character varying',
        name: 'jobtitle',
    }),
    __metadata("design:type", String)
], User.prototype, "jobtitle", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 64,
        default: () => 'NULL::character varying',
        name: 'firstname',
    }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 64,
        default: () => 'NULL::character varying',
        name: 'middlename',
    }),
    __metadata("design:type", String)
], User.prototype, "middlename", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: true,
        length: 64,
        default: () => 'NULL::character varying',
        name: 'surname',
    }),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'deletedat',
    }),
    __metadata("design:type", Date)
], User.prototype, "deletedat", void 0);
__decorate([
    typeorm_1.OneToMany(type => dashboard_chart_entity_1.DashboardChart, dashboardChart => dashboardChart.user, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], User.prototype, "dashboardCharts", void 0);
__decorate([
    typeorm_1.OneToMany(type => message_entity_1.Message, message => message.user, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], User.prototype, "messages", void 0);
__decorate([
    typeorm_1.OneToMany(type => message_metadata_entity_1.MessageMetadata, messageMetadata => messageMetadata.participant, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], User.prototype, "messageMetadatas", void 0);
__decorate([
    typeorm_1.OneToMany(type => message_thread_entity_1.MessageThread, messageThread => messageThread.createdBy, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], User.prototype, "messageThreads", void 0);
__decorate([
    typeorm_1.OneToMany(type => message_thread_metadata_entity_1.MessageThreadMetadata, messageThreadMetadata => messageThreadMetadata.participant, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], User.prototype, "messageThreadMetadatas", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_settings_entity_1.UserSettings, userSettings => userSettings.user, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", user_settings_entity_1.UserSettings)
], User.prototype, "userSettings", void 0);
__decorate([
    typeorm_1.ManyToMany(type => form_entity_1.Form, form => form.users, {
        nullable: false,
    }),
    typeorm_1.JoinTable({ name: 'userformmembers' }),
    __metadata("design:type", Array)
], User.prototype, "forms", void 0);
__decorate([
    typeorm_1.ManyToMany(type => organisation_unit_entity_1.OrganisationUnit, organisationUnit => organisationUnit.users, { nullable: false }),
    typeorm_1.JoinTable({ name: 'organisationunitmembers' }),
    __metadata("design:type", Array)
], User.prototype, "organisationUnits", void 0);
__decorate([
    typeorm_1.ManyToMany(type => user_group_entity_1.UserGroup, userGroup => userGroup.users, {
        nullable: false,
    }),
    typeorm_1.JoinTable({ name: 'usergroupmembers' }),
    __metadata("design:type", Array)
], User.prototype, "userGroups", void 0);
__decorate([
    typeorm_1.ManyToMany(type => user_role_entity_1.UserRole, userRole => userRole.users, { nullable: false }),
    typeorm_1.JoinTable({ name: 'userrolemembers' }),
    __metadata("design:type", Array)
], User.prototype, "userRoles", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "createToken", null);
User = User_1 = __decorate([
    typeorm_1.Entity('user', { schema: 'public' })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map