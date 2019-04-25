import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Record } from '../entities/record';
import { BaseService } from '../../../core/services/base.service';

@Injectable()
export class RecordService extends BaseService<Record> {
  constructor(
    @Inject('RECORD_REPOSITORY')
    private readonly recordRepository: Repository<Record>,
  ) {
    super(recordRepository);
  }
}
