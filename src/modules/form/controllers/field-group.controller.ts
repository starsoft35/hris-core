import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';

import { FieldGroup } from '../entities/field-group.entity';
import { FieldGroupService } from '../services/field-group.service';

@Controller('api/' + FieldGroup.plural)
export class FieldGroupController extends BaseController<FieldGroup> {
  constructor(fieldGroupService: FieldGroupService) {
    super(fieldGroupService, FieldGroup);
  }
}
