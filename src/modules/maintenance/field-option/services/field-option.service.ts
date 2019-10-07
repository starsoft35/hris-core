import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { FieldOption } from '../entities/field-option.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FieldOptionService extends BaseService<FieldOption> {
    constructor(
        @InjectRepository(FieldOption)
        fieldOptionRepository: Repository<FieldOption>,
    ) {
        super(fieldOptionRepository, FieldOption);
    }
}
