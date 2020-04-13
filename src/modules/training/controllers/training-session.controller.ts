import { Controller, Get, UseGuards, Param, HttpStatus, Res } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';

import { TrainingSessionService } from '../services/training-session.service';
import { TrainingSession } from '../entities/training-session.entity';
import { SessionGuard } from 'src/modules/system/user/guards/session.guard';
import { sanitizeResponseObject } from 'src/core/utilities/sanitize-response-object';

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
    @Get(':session/participants')
    @UseGuards(SessionGuard)
    async getParticipants(@Param() session, @Res() res
    ){
      console.log('sessions', session)
      const sessions = await this.trainingSessionService.getParticipants(session)
      return res
      .status(HttpStatus.OK)
      .send(sanitizeResponseObject(sessions));
  }

    }
