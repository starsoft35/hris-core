import { Controller } from '@nestjs/common';
import { FieldRelation } from '../entities/field-relation.entity';
import { BaseController } from 'src/core/controllers/base.contoller';
import { FieldRelationService } from '../services/field-relation.service';

@Controller(FieldRelation.plural)
export class FieldRelationController extends BaseController<FieldRelation> {
    constructor(service: FieldRelationService) {
        super(service, FieldRelation);
    }
}
