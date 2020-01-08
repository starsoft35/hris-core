import { Injectable } from '@nestjs/common';
import { FieldRelation } from '../entities/field-relation.entity';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MaintenanceBaseService } from 'src/core/maintenance/services/base.service';

@Injectable()
export class FieldRelationService extends MaintenanceBaseService<FieldRelation> {
    constructor(
        @InjectRepository(FieldRelation)
        fieldRelationRepository: Repository<FieldRelation>,
    ) {
        super(fieldRelationRepository, FieldRelation);
    }
}
