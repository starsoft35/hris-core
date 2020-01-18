import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';

import { FieldGroupSet } from '../entities/field-groupset.entity';
import { FieldGroupSetService } from '../services/field-group-set.service';

@Controller('api/' + FieldGroupSet.plural)
export class FieldGroupSetController extends BaseController<FieldGroupSet> {
  constructor(fieldGroupSetService: FieldGroupSetService) {
    super(fieldGroupSetService, FieldGroupSet);
  }
}
