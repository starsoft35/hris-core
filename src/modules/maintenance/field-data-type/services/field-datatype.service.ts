import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FieldDataType } from '../entities/field-datatype.entity';
import { MaintenanceBaseService } from 'src/core/maintenance/services/base.service';

@Injectable()
export class FieldDataTypeService extends MaintenanceBaseService<FieldDataType> {
    constructor(
        @InjectRepository(FieldDataType)
        fieldDataTypeRepository: Repository<FieldDataType>,
    ) {
        super(fieldDataTypeRepository, FieldDataType);
    }
}
