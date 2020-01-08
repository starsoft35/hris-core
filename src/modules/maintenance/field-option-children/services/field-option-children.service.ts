import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { FieldOptionChildren } from '../entities/field-option-children.entity';
import { Repository } from 'typeorm';
import { MaintenanceBaseService } from 'src/core/maintenance/services/base.service';

@Injectable()
export class FieldOptionChildrenService extends MaintenanceBaseService<FieldOptionChildren> {
    constructor(
        @InjectRepository(FieldOptionChildren)
        repository: Repository<FieldOptionChildren>,
    ) {
        super(repository, FieldOptionChildren);
    }
}

