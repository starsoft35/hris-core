import { Controller } from '@nestjs/common';
import { FieldInputType } from '../entities/field-input-type.entity';
import { FieldInputTypeService } from '../services/field-input-type.service';
import { MaintenanceBaseController } from 'src/core/maintenance/controllers/base.contoller';

@Controller('api/' + FieldInputType.plural)
export class FieldInputTypeController extends MaintenanceBaseController<FieldInputType> {
    constructor(fieldInputTypeService: FieldInputTypeService) {
        super(fieldInputTypeService, FieldInputType);
    }
}
