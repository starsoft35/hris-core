import { Controller } from '@nestjs/common';
import { Field } from '../entities/field.entity';
import { FieldService } from '../services/field.service';
import { BaseController } from 'src/core/controllers/base.contoller';

@Controller('api/' + Field.plural)
export class FieldController extends BaseController<Field> {
    constructor(service: FieldService) {
        super(service, Field);
    }
}