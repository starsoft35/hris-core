import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';

import { TrainingCurriculumService } from '../services/training-curriculum.service';
import { TrainingCurriculum } from '../entities/training-curriculum.entity';

@Controller('api/training/' + TrainingCurriculum.plural)
export class TrainingCurriculumController extends BaseController<
TrainingCurriculum
> {
    constructor(trainingCurriculumService: TrainingCurriculumService) {
        super(trainingCurriculumService, TrainingCurriculum);
    }
}
