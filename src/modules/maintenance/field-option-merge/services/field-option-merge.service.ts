import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { FieldOptionMerge } from '../entities/field-option-merge.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaintenanceBaseService } from 'src/core/maintenance/services/base.service';

@Injectable()
export class FieldOptionMergeService extends MaintenanceBaseService<FieldOptionMerge> {
    constructor(
        @InjectRepository(FieldOptionMerge)
        fieldOptionMergeRepository: Repository<FieldOptionMerge>,
    ) {
        super(fieldOptionMergeRepository, FieldOptionMerge);
    }
}
