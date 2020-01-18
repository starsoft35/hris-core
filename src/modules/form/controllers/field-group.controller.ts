import { Controller } from '@nestjs/common';
import { FieldGroup } from '../entities/field-group.entity';
import { FieldGroupService } from '../services/field-group.service';
import { MaintenanceBaseController } from 'src/core/maintenance/controllers/base.contoller';

@Controller('api/' + FieldGroup.plural)
export class FieldGroupController extends MaintenanceBaseController<
  FieldGroup
> {
  constructor(fieldGroupService: FieldGroupService) {
    super(fieldGroupService, FieldGroup);
  }
}
