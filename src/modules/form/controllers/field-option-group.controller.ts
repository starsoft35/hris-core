import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';

import { FieldOptionGroup } from '../entities/field-option-group.entity';
import { FieldOptionGroupService } from '../services/field-option-group.service';

@Controller('api/' + FieldOptionGroup.plural)
export class FieldOptionGroupController extends BaseController<
  FieldOptionGroup
> {
  constructor(fieldOptionGroupService: FieldOptionGroupService) {
    super(fieldOptionGroupService, FieldOptionGroup);
  }
}
