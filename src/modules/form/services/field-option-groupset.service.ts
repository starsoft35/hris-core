import { Injectable } from '@nestjs/common';
import { FieldOptionGroupSet } from '../entities/field-option-groupset.entity';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FieldOptionGroupSetService extends BaseService<FieldOptionGroupSet> {
    constructor(
        @InjectRepository(FieldOptionGroupSet)
        repository: Repository<FieldOptionGroupSet>,
    ) {
        super(repository, FieldOptionGroupSet);
    }
}
