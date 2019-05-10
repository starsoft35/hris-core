import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Message } from '../entities/message.entity';
import { MessageService } from '../services/message.service';

@Controller('message')
export class MessageController extends BaseController<Message> {
  constructor(messageService: MessageService) {
    super(messageService);
  }
  get plural() {
    return 'messages';
  }
}
