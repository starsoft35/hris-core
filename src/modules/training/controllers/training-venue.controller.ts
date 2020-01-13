import { Controller } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';

import { TrainingVenueService } from '../services/training-venue.service';
import { TrainingVenue } from '../entities/training-venue.entity';

@Controller('api/training/' + TrainingVenue.plural)
export class TrainingVenueController extends BaseController<
TrainingVenue
> {
    constructor(trainingVenueService: TrainingVenueService) {
        super(trainingVenueService, TrainingVenue);
    }
}
