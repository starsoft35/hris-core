import { Controller } from '@nestjs/common';
import { FieldRelation } from '../entities/field-relation.entity';
import { BaseController } from 'src/core/controllers/base.contoller';
import { FieldRelationService } from '../services/field-relation.service';
import { MaintenanceBaseController } from 'src/core/maintenance/controllers/base.contoller';

@Controller('api/' + FieldRelation.plural)
export class FieldRelationController extends MaintenanceBaseController<FieldRelation> {
    constructor(fieldRelationService: FieldRelationService) {
        super(fieldRelationService, FieldRelation);
    }
}
