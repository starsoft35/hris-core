import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { recordProviders } from './providers/record.providers';
import { RecordService } from './services/record.service';
import { RecordsController } from './controllers/record.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    DatabaseModule,
  ],
  controllers: [RecordsController],
  providers: [...recordProviders, RecordService],
})
export class RecordModule {}