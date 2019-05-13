import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { MessageThread } from '../entities/message-thread.entity';
import { MessageThreadService } from '../services/message-thread.service';

@Controller(MessageThread.plural)
export class MessageThreadController extends BaseController<MessageThread> {
  constructor(messageThreadService: MessageThreadService) {
    super(messageThreadService, MessageThread);
  }
}
