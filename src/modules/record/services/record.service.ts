import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../../../core/services/base.service';
import { Record } from '../entities/record.entity';

@Injectable()
export class RecordService extends BaseService<Record> {
  constructor(
    @InjectRepository(Record)
    recordRepository: Repository<Record>,
  ) {
    super(recordRepository);
  }

  get model() {
    return Record;
  }
}
