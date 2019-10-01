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
const user_entity_1 = require("../../user/entities/user.entity");
const message_entity_1 = require("./message.entity");
let MessageMetadata = class MessageMetadata extends entity_core_props_1.EntityCoreProps {
};
MessageMetadata.plural = 'messageMetadata';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'messagemetadataid',
    }),
    __metadata("design:type", Number)
], MessageMetadata.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => message_entity_1.Message, message => message.messageMetadatas, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'messageid' }),
    __metadata("design:type", message_entity_1.Message)
], MessageMetadata.prototype, "message", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.messageMetadatas, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'participantid' }),
    __metadata("design:type", user_entity_1.User)
], MessageMetadata.prototype, "participant", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'isread',
    }),
    __metadata("design:type", Boolean)
], MessageMetadata.prototype, "isRead", void 0);
MessageMetadata = __decorate([
    typeorm_1.Entity('messagemetadata', { schema: 'public' })
], MessageMetadata);
exports.MessageMetadata = MessageMetadata;
//# sourceMappingURL=message-metadata.entity.js.map