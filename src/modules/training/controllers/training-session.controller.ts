import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';

import { TrainingSessionService } from '../services/training-session.service';
import { TrainingSession } from '../entities/training-session.entity';

@Controller('api/training/' + TrainingSession.plural)
export class TrainingSessionController extends BaseController<
TrainingSession
> {
    constructor(trainingSessionService: TrainingSessionService) {
        super(trainingSessionService, TrainingSession);
    }
}
