import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { RecordsController } from './controllers/record.controller';
import { recordProviders } from './providers/record.providers';
import { RecordService } from './services/record.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
  ],
  controllers: [RecordsController],
  providers: [...recordProviders, RecordService],
})
export class RecordModule {}
