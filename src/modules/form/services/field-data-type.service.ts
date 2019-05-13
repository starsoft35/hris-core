import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FieldDataType } from '../entities/field-datatype.entity';

@Injectable()
export class FieldDataTypeService extends BaseService<FieldDataType> {
    constructor(
        @InjectRepository(FieldDataType)
        repository: Repository<FieldDataType>,
    ) {
        super(repository, FieldDataType);
    }
}
