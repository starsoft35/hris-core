import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecordsController } from './controllers/record.controller';
import { Record } from './entities/record.entity';
import { RecordService } from './services/record.service';
import { DataStoreController } from './controllers/data-store.contoller';
import { DataStoreService } from './services/data-store.service';
import { DataStore } from './entities/data-store.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([Record, DataStore]),
  ],
  controllers: [RecordsController, DataStoreController],
  providers: [RecordService, DataStoreService],
})
export class RecordModule {}
