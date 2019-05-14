import { Controller } from '@nestjs/common';
import { FieldGroupSet } from '../entities/field-groupset.entity';
import { BaseController } from 'src/core/controllers/base.contoller';
import { FieldGroupSetService } from '../services/field-groupset.service';

@Controller('api/' + FieldGroupSet.plural)
export class FieldGroupSetController extends BaseController<
    FieldGroupSet
> {
    constructor(service: FieldGroupSetService) {
        super(service, FieldGroupSet);
    }
}
