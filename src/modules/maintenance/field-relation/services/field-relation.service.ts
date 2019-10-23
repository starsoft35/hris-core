import { Injectable } from '@nestjs/common';
import { FieldRelation } from '../entities/field-relation.entity';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FieldRelationService extends BaseService<FieldRelation> {
    constructor(
        @InjectRepository(FieldRelation)
        fieldRelationRepository: Repository<FieldRelation>,
    ) {
        super(fieldRelationRepository, FieldRelation);
    }
}
