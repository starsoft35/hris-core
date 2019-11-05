import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { ReportTable } from '../entities/report-table.entity';

@Injectable()
export class ReportTableService extends BaseService<ReportTable> {
  constructor(
    @InjectRepository(ReportTable)
    repository: Repository<ReportTable>,
  ) {
    super(repository, ReportTable);
  }
}
