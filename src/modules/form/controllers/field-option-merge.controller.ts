import { Controller } from '@nestjs/common';
import { FieldOptionMerge } from '../entities/field-option-merge.entity';
import { FieldOptionMergeService } from '../services/field-option-merge.service';
import { BaseController } from 'src/core/controllers/base.contoller';

@Controller('api/' + FieldOptionMerge.plural)
export class FieldOptionMergeController extends BaseController<
    FieldOptionMerge
> {
    constructor(service: FieldOptionMergeService) {
        super(service, FieldOptionMerge);
    }
}