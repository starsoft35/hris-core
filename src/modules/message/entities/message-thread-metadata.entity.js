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
const message_thread_entity_1 = require("./message-thread.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const entity_core_props_1 = require("../../../core/entities/entity-core-props");
let MessageThreadMetadata = class MessageThreadMetadata extends entity_core_props_1.EntityCoreProps {
};
MessageThreadMetadata.plural = 'messageThreadMetadata';
__decorate([
    typeorm_1.Column('integer', {
        nullable: false,
        primary: true,
        name: 'id',
    }),
    __metadata("design:type", Number)
], MessageThreadMetadata.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => message_thread_entity_1.MessageThread, messageThread => messageThread.messageThreadMetadatas, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'threadid' }),
    __metadata("design:type", message_thread_entity_1.MessageThread)
], MessageThreadMetadata.prototype, "thread", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.User, user => user.messageThreadMetadatas, {
        onDelete: 'CASCADE',
    }),
    typeorm_1.JoinColumn({ name: 'participantid' }),
    __metadata("design:type", user_entity_1.User)
], MessageThreadMetadata.prototype, "participant", void 0);
__decorate([
    typeorm_1.Column('boolean', {
        nullable: false,
        name: 'isdeleted',
    }),
    __metadata("design:type", Boolean)
], MessageThreadMetadata.prototype, "isDeleted", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'lastparticipantmessagedate',
    }),
    __metadata("design:type", Date)
], MessageThreadMetadata.prototype, "lastParticipantMessageDate", void 0);
__decorate([
    typeorm_1.Column('timestamp without time zone', {
        nullable: true,
        default: () => 'NULL::timestamp without time zone',
        name: 'lastmessagedate',
    }),
    __metadata("design:type", Date)
], MessageThreadMetadata.prototype, "lastMessageDate", void 0);
MessageThreadMetadata = __decorate([
    typeorm_1.Entity('messagethreadmetadata', { schema: 'public' })
], MessageThreadMetadata);
exports.MessageThreadMetadata = MessageThreadMetadata;
//# sourceMappingURL=message-thread-metadata.entity.js.map