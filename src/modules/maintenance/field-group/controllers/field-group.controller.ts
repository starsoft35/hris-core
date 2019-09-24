import { Controller } from '@nestjs/common';
import { FieldGroup } from '../entities/field-group.entity';
import { FieldGroupService } from '../services/field-group.service';
import { BaseController } from 'src/core/controllers/base.contoller';

@Controller('api/' + FieldGroup.plural)
export class FieldGroupController extends BaseController<
    FieldGroup
> {
    constructor(service: FieldGroupService) {
        super(service, FieldGroup);
    }
}
