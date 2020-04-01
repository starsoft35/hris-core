import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';

import { TrainingTopicService } from '../services/training-method.service';
import { TrainingTopic } from '../entities/training-topic.entity';

@Controller('api/training/' + TrainingTopic.plural)
export class TrainingTopicController extends BaseController<
TrainingTopic
> {
    constructor(trainingMethodService: TrainingTopicService) {
        super(trainingMethodService, TrainingTopic);
    }
}
