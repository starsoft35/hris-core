import { Controller } from '@nestjs/common';
import { FieldOptionChildren } from '../entities/field-option-children.entity';
import { FieldOptionChildrenService } from '../services/field-option-children.service';
import { MaintenanceBaseController } from 'src/core/maintenance/controllers/base.contoller';

@Controller('api/' + FieldOptionChildren.plural)
export class FieldOptionChildrenController extends MaintenanceBaseController<
FieldOptionChildren
> {
    constructor(fieldOptionChildrenService: FieldOptionChildrenService) {
        super(fieldOptionChildrenService, FieldOptionChildren);
    }
}
