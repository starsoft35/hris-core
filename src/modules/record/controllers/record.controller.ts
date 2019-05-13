import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Record } from 'src/modules/record/entities/record.entity';

import { RecordService } from '../services/record.service';

@Controller(Record.plural)
export class RecordsController extends BaseController<Record> {
  constructor(private readonly recordService: RecordService) {
    super(recordService, Record);
  }
}
