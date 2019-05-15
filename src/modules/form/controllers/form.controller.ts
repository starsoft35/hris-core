import { Controller } from '@nestjs/common';
import { Form } from '../entities/form.entity';
import { BaseController } from 'src/core/controllers/base.contoller';
import { FormService } from '../services/form.service';

@Controller('api/' + Form.plural)
export class FormController extends BaseController<Form> {
    constructor(service: FormService) {
        super(service, Form);
    }
}