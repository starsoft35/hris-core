import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';

import { TrainingMethodService } from '../services/training-method.service';
import { TrainingMethod } from '../entities/training-method.entity';

@Controller('api/training/' + TrainingMethod.plural)
export class TrainingMethodController extends BaseController<
TrainingMethod
> {
    constructor(trainingMethodService: TrainingMethodService) {
        super(trainingMethodService, TrainingMethod);
    }
}
