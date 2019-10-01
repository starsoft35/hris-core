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
const common_1 = require("@nestjs/common");
const base_contoller_1 = require("src/core/controllers/base.contoller");
const message_thread_entity_1 = require("../entities/message-thread.entity");
const message_thread_service_1 = require("../services/message-thread.service");
let MessageThreadController = class MessageThreadController extends base_contoller_1.BaseController {
    constructor(messageThreadService) {
        super(messageThreadService, message_thread_entity_1.MessageThread);
    }
};
MessageThreadController = __decorate([
    common_1.Controller('api/' + message_thread_entity_1.MessageThread.plural),
    __metadata("design:paramtypes", [message_thread_service_1.MessageThreadService])
], MessageThreadController);
exports.MessageThreadController = MessageThreadController;
//# sourceMappingURL=message-thread.controller.js.map