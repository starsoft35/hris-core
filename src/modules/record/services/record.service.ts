import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Record } from '../../../database/entities/record';
import { ModelService } from '../../../core/model.service';

@Injectable()
export class RecordService extends ModelService<Record> {
  constructor(
    @Inject('RECORD_REPOSITORY')
    private readonly recordRepository: Repository<Record>,
  ) {
    super(recordRepository);
  }
}