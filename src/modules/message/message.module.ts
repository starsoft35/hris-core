import { Module } from '@nestjs/common';
import { MessageMetadataController } from './controllers/message-metadata.controller';
import { MessageThreadMetadataController } from './controllers/message-thread-metadata.controller';
import { MessageThreadController } from './controllers/message-thread.controller';
import { MessageController } from './controllers/message.controller';
import { MessageMetadataService } from './services/message-metadata.service';
import { MessageThreadMetadataService } from './services/message-thread-metadata.service';
import { MessageThreadService } from './services/message-thread.service';
import { MessageService } from './services/message.service';

@Module({
  controllers: [
    MessageMetadataController,
    MessageThreadMetadataController,
    MessageThreadController,
    MessageController,
  ],
  providers: [
    MessageMetadataService,
    MessageThreadMetadataService,
    MessageThreadService,
    MessageService,
  ],
})
export class MessageModule {}
