import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';

import { FieldOptionGroupSet } from '../entities/field-option-group-set.entity';
import { FieldOptionGroupSetService } from '../services/field-option-group-set.service';

@Controller('api/' + FieldOptionGroupSet.plural)
export class FieldOptionGroupSetController extends BaseController<
  FieldOptionGroupSet
> {
  constructor(fieldOptionGroupSetService: FieldOptionGroupSetService) {
    super(fieldOptionGroupSetService, FieldOptionGroupSet);
  }
}
