import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecordsController } from './controllers/record.controller';
import { Record } from './entities/record.entity';
import { RecordService } from './services/record.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([Record]),
  ],
  controllers: [RecordsController],
  providers: [RecordService],
})
export class RecordModule {}
