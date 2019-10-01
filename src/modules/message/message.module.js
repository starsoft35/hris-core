"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const message_metadata_controller_1 = require("./controllers/message-metadata.controller");
const message_thread_metadata_controller_1 = require("./controllers/message-thread-metadata.controller");
const message_thread_controller_1 = require("./controllers/message-thread.controller");
const message_controller_1 = require("./controllers/message.controller");
const message_metadata_service_1 = require("./services/message-metadata.service");
const message_thread_metadata_service_1 = require("./services/message-thread-metadata.service");
const message_thread_service_1 = require("./services/message-thread.service");
const message_service_1 = require("./services/message.service");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const message_metadata_entity_1 = require("./entities/message-metadata.entity");
const message_thread_entity_1 = require("./entities/message-thread.entity");
const message_thread_metadata_entity_1 = require("./entities/message-thread-metadata.entity");
const message_entity_1 = require("./entities/message.entity");
let MessageModule = class MessageModule {
};
MessageModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'basic', session: true }),
            typeorm_1.TypeOrmModule.forFeature([
                message_metadata_entity_1.MessageMetadata,
                message_thread_entity_1.MessageThread,
                message_thread_metadata_entity_1.MessageThreadMetadata,
                message_entity_1.Message,
            ]),
        ],
        controllers: [
            message_metadata_controller_1.MessageMetadataController,
            message_thread_metadata_controller_1.MessageThreadMetadataController,
            message_thread_controller_1.MessageThreadController,
            message_controller_1.MessageController,
        ],
        providers: [
            message_metadata_service_1.MessageMetadataService,
            message_thread_metadata_service_1.MessageThreadMetadataService,
            message_thread_service_1.MessageThreadService,
            message_service_1.MessageService,
        ],
    })
], MessageModule);
exports.MessageModule = MessageModule;
//# sourceMappingURL=message.module.js.map