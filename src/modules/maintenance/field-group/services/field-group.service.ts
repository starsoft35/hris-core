import { Injectable } from '@nestjs/common';
import { FieldGroup } from '../entities/field-group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/core/services/base.service';

@Injectable()
export class FieldGroupService extends BaseService<FieldGroup> {
    constructor(
        @InjectRepository(FieldGroup)
        repository: Repository<FieldGroup>,
    ) {
        super(repository, FieldGroup);
    }
}