import { Controller } from '@nestjs/common';
import { FieldGroupSet } from '../entities/field-groupset.entity';
import { FieldGroupSetService } from '../services/field-groupset.service';
import { MaintenanceBaseController } from 'src/core/maintenance/controllers/base.contoller';

@Controller('api/' + FieldGroupSet.plural)
export class FieldGroupSetController extends MaintenanceBaseController<FieldGroupSet> {
    constructor(fieldGroupSetService: FieldGroupSetService) {
        super(fieldGroupSetService, FieldGroupSet);
    }
}
