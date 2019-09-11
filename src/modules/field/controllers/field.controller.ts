import { Controller } from '@nestjs/common';
import { FieldService } from '../../form/services/field.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Field } from '../entities/field.entity';

@Controller('api/' + Field.plural)
export class FieldController extends BaseController<Field> {
    constructor(service: FieldService) {
        super(service, Field);
    }
}