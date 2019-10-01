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
const message_thread_metadata_entity_1 = require("./message-thread-metadata.entity");
const message_entity_1 = require("./message.entity");
let MessageThread = class MessageThread extends entity_core_props_1.EntityCoreProps {
};
MessageThread.plural = 'messageThreads';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], MessageThread.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.messageThreads, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'createdbyid' }),
    __metadata("design:type", user_entity_1.User)
], MessageThread.prototype, "createdBy", void 0);
__decorate([
    typeorm_1.Column('character varying', {
        nullable: false,
        length: 255,
        name: 'subject',
    }),
    __metadata("design:type", String)
], MessageThread.prototype, "subject", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'isspam',
    }),
    __metadata("design:type", Boolean)
], MessageThread.prototype, "isSpam", void 0);
__decorate([
    typeorm_1.OneToMany(type => message_entity_1.Message, message => message.thread, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], MessageThread.prototype, "messages", void 0);
__decorate([
    typeorm_1.OneToMany(type => message_thread_metadata_entity_1.MessageThreadMetadata, messageThreadMetadata => messageThreadMetadata.thread, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], MessageThread.prototype, "messageThreadMetadatas", void 0);
MessageThread = __decorate([
    typeorm_1.Entity('messagethread', { schema: 'public' })
], MessageThread);
exports.MessageThread = MessageThread;
//# sourceMappingURL=message-thread.entity.js.map