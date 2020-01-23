import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecordsController } from './controllers/record.controller';
import { Record } from './entities/record.entity';
import { RecordService } from './services/record.service';
import { DataStoreController } from './controllers/data-store.contoller';
import { DataStoreService } from './services/data-store.service';
import { DataStore } from './entities/data-store.entity';
import { RecordValue } from './entities/record-value.entity';
import { Field } from '../form/entities/field.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([Field,Record,RecordValue, DataStore]),
  ],
  controllers: [RecordsController, DataStoreController],
  providers: [RecordService, DataStoreService],
})
export class RecordModule {}
