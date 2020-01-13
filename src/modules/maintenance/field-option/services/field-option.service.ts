import { Injectable } from '@nestjs/common';
import { FieldOption } from '../entities/field-option.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaintenanceBaseService } from 'src/core/maintenance/services/base.service';

@Injectable()
export class FieldOptionService extends MaintenanceBaseService<FieldOption> {
    constructor(
        @InjectRepository(FieldOption)
        fieldOptionRepository: Repository<FieldOption>,
    ) {
        super(fieldOptionRepository, FieldOption);
    }
}
