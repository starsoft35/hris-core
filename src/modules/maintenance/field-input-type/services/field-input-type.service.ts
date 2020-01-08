import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { FieldInputType } from '../entities/field-input-type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MaintenanceBaseService } from 'src/core/maintenance/services/base.service';

@Injectable()
export class FieldInputTypeService extends MaintenanceBaseService<FieldInputType> {
    constructor(
        @InjectRepository(FieldInputType)
        fieldInputTypeRepository: Repository<FieldInputType>,
    ) {
        super(fieldInputTypeRepository, FieldInputType);
    }
}
