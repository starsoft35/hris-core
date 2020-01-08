import { Injectable } from '@nestjs/common';
import { FieldGroupSet } from '../entities/field-groupset.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MaintenanceBaseService } from 'src/core/maintenance/services/base.service';

@Injectable()
export class FieldGroupSetService extends MaintenanceBaseService<FieldGroupSet> {
    constructor(
        @InjectRepository(FieldGroupSet)
        fieldGroupSetRepository: Repository<FieldGroupSet>,
    ) {
        super(fieldGroupSetRepository, FieldGroupSet);
    }
}
