import { Controller } from '@nestjs/common';
import { FieldOptionMerge } from '../entities/field-option-merge.entity';
import { FieldOptionMergeService } from '../services/field-option-merge.service';
import { MaintenanceBaseController } from 'src/core/maintenance/controllers/base.contoller';

@Controller('api/' + FieldOptionMerge.plural)
export class FieldOptionMergeController extends MaintenanceBaseController<
FieldOptionMerge
> {
    constructor(fieldOptionMergeService: FieldOptionMergeService) {
        super(fieldOptionMergeService, FieldOptionMerge);
    }
}
