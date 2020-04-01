import { Controller, Get, UseGuards } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';

import { TrainingSessionService } from '../services/training-session.service';
import { TrainingSession } from '../entities/training-session.entity';
import { SessionGuard } from 'src/modules/system/user/guards/session.guard';

@Controller('api/training/' + TrainingSession.plural)
export class TrainingSessionController extends BaseController<
TrainingSession
> {
    constructor(private trainingSessionService: TrainingSessionService) {
        super(trainingSessionService, TrainingSession);
    }
    @Get('/deliverymode')
    @UseGuards(SessionGuard)
    async delivery (){
      return this.trainingSessionService.deliverymode()
    }
  }
