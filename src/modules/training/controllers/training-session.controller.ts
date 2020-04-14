import { Controller, Get, UseGuards, Param, HttpStatus, Res, Query, Post, Delete } from '@nestjs/common';
import { BaseController } from '../../../core/controllers/base.contoller';

import { TrainingSessionService } from '../services/training-session.service';
import { TrainingSession } from '../entities/training-session.entity';
import { SessionGuard } from 'src/modules/system/user/guards/session.guard';
import { sanitizeResponseObject } from 'src/core/utilities/sanitize-response-object';
import { SessionParticipant } from '../entities/training-session-participant.entity';
import { getPagerDetails } from 'src/core/utilities';
import * as _ from 'lodash';

@Controller('api/training/' + TrainingSession.plural)
export class TrainingSessionController extends BaseController<
TrainingSession
> {
  constructor(private trainingSessionService: TrainingSessionService) {
    super(trainingSessionService, TrainingSession);
  }
  @Get('/deliverymode')
  @UseGuards(SessionGuard)
  async delivery() {
    return this.trainingSessionService.deliverymode()
  }
  @Get(':session/participants')
  @UseGuards(SessionGuard)
  async getParticipants(@Param() param, @Res() res, @Query() query
  ) {
    const sessions = await this.trainingSessionService.getParticipants(param.session)
    return res
      .status(HttpStatus.OK)
      .send(sanitizeResponseObject(sessions));
  }

  @Get(':session/facilitators')
  @UseGuards(SessionGuard)
  async getFacilitators(@Param() param, @Res() res
  ) {
    const sessions = await this.trainingSessionService.getFacilitators(param.session)
    return res
      .status(HttpStatus.OK)
      .send(sanitizeResponseObject(sessions));
  }
  @Post(':session/participants')
  @UseGuards(SessionGuard)
  async addParticipants(@Param() param, @Res() res, @Query() query
  ) {
    const sessions = await this.trainingSessionService.getParticipants(param.session)
    return res
      .status(HttpStatus.OK)
      .send(sanitizeResponseObject(sessions));
  }

  @Post(':session/facilitators')
  @UseGuards(SessionGuard)
  async addFacilitators(@Param() param, @Res() res
  ) {
    const sessions = await this.trainingSessionService.getFacilitators(param.session)
    return res
      .status(HttpStatus.OK)
      .send(sanitizeResponseObject(sessions));
  }
  @Delete(':session/participants')
  @UseGuards(SessionGuard)
  async deleteParticipants(@Param() param, @Res() res, @Query() query
  ) {
    const sessions = await this.trainingSessionService.getParticipants(param.session)
    return res
      .status(HttpStatus.OK)
      .send(sanitizeResponseObject(sessions));
  }

  @Delete(':session/facilitators')
  @UseGuards(SessionGuard)
  async deleteFacilitators(@Param() param, @Res() res
  ) {
    const sessions = await this.trainingSessionService.getFacilitators(param.session)
    return res
      .status(HttpStatus.OK)
      .send(sanitizeResponseObject(sessions));
  }
}
