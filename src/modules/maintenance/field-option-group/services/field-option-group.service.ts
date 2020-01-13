import { Injectable } from '@nestjs/common';
import { FieldOptionGroup } from '../entities/field-option-group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaintenanceBaseService } from 'src/core/maintenance/services/base.service';

@Injectable()
export class FieldOptionGroupService extends MaintenanceBaseService<FieldOptionGroup> {
    constructor(
        @InjectRepository(FieldOptionGroup)
        fieldOptionGroupRepository: Repository<FieldOptionGroup>,
    ) {
        super(fieldOptionGroupRepository, FieldOptionGroup);
    }
}
