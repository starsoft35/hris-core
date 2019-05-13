import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { FieldOptionGroupSet } from '../entities/field-option-groupset.entity';
import { FieldOptionGroupSetService } from '../services/field-option-groupset.service';

@Controller(FieldOptionGroupSet.plural)
export class FieldOptionGroupSetController extends BaseController<
    FieldOptionGroupSet
> {
    constructor(service: FieldOptionGroupSetService) {
        super(service, FieldOptionGroupSet);
    }
}