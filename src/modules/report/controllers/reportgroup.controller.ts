import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { ReportGroup } from '../entities/report.group.entity';
import {ReportGroupService} from '../services/reportgroup.service'

@Controller('api/' + ReportGroup.plural)
export class ReportGroupController extends BaseController<ReportGroup>{
    constructor(ReportGroupService: ReportGroupService){
        super(ReportGroupService, ReportGroup);
    }
}
