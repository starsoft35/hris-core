import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportGroup } from '../entities/report.group.entity';

@Injectable()
export class ReportGroupService extends BaseService<ReportGroup>{
    constructor(@InjectRepository(ReportGroup)
    reportGroupRepository: Repository<ReportGroup>,
    ){
        super(reportGroupRepository, ReportGroup);
    }
}
