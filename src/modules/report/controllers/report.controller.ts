import { Controller } from '@nestjs/common';
import {ReportService} from '../services/report.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Report } from '../entities/report.entity';

@Controller('api/' + Report.plural)
export class ReportController extends BaseController<Report>{
    constructor(ReportService: ReportService){
        super(ReportService, Report);
    }
}
