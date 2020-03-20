import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';

import { TrainingInstanceService } from '../services/training-session.service';
import { TrainingInstance } from '../entities/training-instance.entity';

@Controller('api/training/' + TrainingInstance.plural)
export class TrainingInstanceController extends BaseController<TrainingInstance> {
  constructor(trainingInstanceService: TrainingInstanceService) {
    super(trainingInstanceService, TrainingInstance);
  }
}
