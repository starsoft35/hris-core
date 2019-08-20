import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { FieldInputType } from '../entities/field-input-type.entity';
import { FieldInputTypeService } from '../services/field-input-type.service';

@Controller('api/' + FieldInputType.plural)
export class FieldInputTypeController extends BaseController<
    FieldInputType
> {
    constructor(service: FieldInputTypeService) {
        super(service, FieldInputType);
    }
}

