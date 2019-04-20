import { Controller, Get, UseGuards } from '@nestjs/common';
import { RecordService } from '../services/record.service';
import { AuthGuard } from '@nestjs/passport';
import { ModelController } from 'src/core/model.contoller';
import { Record } from 'src/database/entities/record';

@Controller('records')
//@UseGuards(AuthGuard())
export class RecordsController extends ModelController<Record> {
  constructor(private readonly recordService: RecordService) {
    super(recordService);
  }
  get plural() {
    return 'records';
  }
}