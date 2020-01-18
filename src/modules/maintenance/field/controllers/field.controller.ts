import { Controller } from '@nestjs/common';
import { FieldService } from '../services/field.service';
import { Field } from '../entities/field.entity';
import { MaintenanceBaseController } from 'src/core/maintenance/controllers/base.contoller';

@Controller('api/' + Field.plural)
export class FieldController extends MaintenanceBaseController<Field> {
  constructor(fieldService: FieldService) {
    super(fieldService, Field);
  }
}
