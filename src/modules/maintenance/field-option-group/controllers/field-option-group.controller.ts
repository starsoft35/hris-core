import { Controller } from '@nestjs/common';
import { FieldOptionGroup } from '../entities/field-option-group.entity';
import { FieldOptionGroupService } from '../services/field-option-group.service';
import { MaintenanceBaseController } from 'src/core/maintenance/controllers/base.contoller';

@Controller('api/' + FieldOptionGroup.plural)
export class FieldOptionGroupController extends MaintenanceBaseController<
FieldOptionGroup
> {
    constructor(fieldOptionGroupService: FieldOptionGroupService) {
        super(fieldOptionGroupService, FieldOptionGroup);
    }
}
