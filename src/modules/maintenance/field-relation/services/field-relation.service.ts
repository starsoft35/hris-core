import { Injectable } from '@nestjs/common';
import { FieldRelation } from '../entities/field-relation.entity';
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
