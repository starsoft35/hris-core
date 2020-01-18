import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';

import { Field } from '../entities/field.entity';
import { FieldService } from '../services/field.service';

@Controller('api/' + Field.plural)
export class FieldController extends BaseController<Field> {
  constructor(fieldService: FieldService) {
    super(fieldService, Field);
  }
}
