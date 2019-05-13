import { Controller } from '@nestjs/common';
import { FieldOptionChildren } from '../entities/field-option-children.entity';
import { FieldOptionChildrenService } from '../services/field-option-children.service';
import { BaseController } from 'src/core/controllers/base.contoller';

@Controller(FieldOptionChildren.plural)
export class FieldOptionChildrenController extends BaseController<
    FieldOptionChildren
> {
    constructor(service: FieldOptionChildrenService) {
        super(service, FieldOptionChildren);
    }
}