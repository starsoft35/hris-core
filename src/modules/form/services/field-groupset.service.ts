import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { FieldGroupSet } from '../entities/field-groupset.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FieldGroupSetService extends BaseService<FieldGroupSet> {
    constructor(
        @InjectRepository(FieldGroupSet)
        repository: Repository<FieldGroupSet>,
    ) {
        super(repository, FieldGroupSet);
    }
}
