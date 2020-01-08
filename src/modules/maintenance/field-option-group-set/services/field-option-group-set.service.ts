import { Injectable } from '@nestjs/common';
import { FieldOptionGroupSet } from '../entities/field-option-group-set.entity';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MaintenanceBaseService } from 'src/core/maintenance/services/base.service';

@Injectable()
export class FieldOptionGroupSetService extends MaintenanceBaseService<
FieldOptionGroupSet
> {
    constructor(
        @InjectRepository(FieldOptionGroupSet)
        fieldOptionGroupSetRepository: Repository<FieldOptionGroupSet>,
    ) {
        super(fieldOptionGroupSetRepository, FieldOptionGroupSet);
    }
}
