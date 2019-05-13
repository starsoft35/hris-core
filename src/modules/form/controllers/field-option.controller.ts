import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { FieldOption } from '../entities/field-option.entity';
import { FieldOptionService } from '../services/field-option.service';

@Controller(FieldOption.plural)
export class FieldOptionController extends BaseController<
    FieldOption
> {
    constructor(service: FieldOptionService) {
        super(service, FieldOption);
    }
}