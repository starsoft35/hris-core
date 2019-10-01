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
const message_metadata_entity_1 = require("./message-metadata.entity");
const message_thread_entity_1 = require("./message-thread.entity");
let Message = class Message extends entity_core_props_1.EntityCoreProps {
};
Message.plural = 'messages';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'messageid',
    }),
    __metadata("design:type", Number)
], Message.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => message_thread_entity_1.MessageThread, messageThread => messageThread.messages, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'threadid' }),
    __metadata("design:type", message_thread_entity_1.MessageThread)
], Message.prototype, "thread", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.messages, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'userid' }),
    __metadata("design:type", user_entity_1.User)
], Message.prototype, "user", void 0);
__decorate([
    typeorm_1.Column('text', {
        nullable: false,
        name: 'body',
    }),
    __metadata("design:type", String)
], Message.prototype, "body", void 0);
__decorate([
    typeorm_1.OneToMany(type => message_metadata_entity_1.MessageMetadata, messageMetadata => messageMetadata.message, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Message.prototype, "messageMetadatas", void 0);
Message = __decorate([
    typeorm_1.Entity('message', { schema: 'public' })
], Message);
exports.Message = Message;
//# sourceMappingURL=message.entity.js.map