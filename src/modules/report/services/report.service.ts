import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Report } from '../entities/report.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReportService extends BaseService<Report>{
    constructor(@InjectRepository(Report)
    reportRepository: Repository<Report>,
    ){
        super(reportRepository, Report);
    }
}
