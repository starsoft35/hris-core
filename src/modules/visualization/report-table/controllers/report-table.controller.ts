import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { ReportTable } from '../entities/report-table.entity';
import { ReportTableService } from '../services/report-table.service';

@Controller('api/' + ReportTable.plural)
export class ReportTableController extends BaseController<ReportTable> {
  constructor(service: ReportTableService) {
    super(service, ReportTable);
  }
}
