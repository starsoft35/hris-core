import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { FieldInputType } from '../entities/field-input-type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FieldInputTypeService extends BaseService<FieldInputType> {
    constructor(
        @InjectRepository(FieldInputType)
        repository: Repository<FieldInputType>,
    ) {
        super(repository, FieldInputType);
    }
}