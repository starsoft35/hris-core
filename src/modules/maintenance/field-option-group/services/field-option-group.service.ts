import { Injectable } from '@nestjs/common';
import { FieldOptionGroup } from '../entities/field-option-group.entity';
import { BaseService } from 'src/core/services/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FieldOptionGroupService extends BaseService<FieldOptionGroup> {
    constructor(
        @InjectRepository(FieldOptionGroup)
        fieldOptionGroupRepository: Repository<FieldOptionGroup>,
    ) {
        super(fieldOptionGroupRepository, FieldOptionGroup);
    }
}
