import { Controller, Res, Req, Body } from '@nestjs/common';
import {ScheduleService} from '../services/schedule.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Schedule } from '../entities/schedule.entity';
import { ApiResult } from 'dist/core/interfaces';
import { Request, Response } from 'express';

@Controller('api/' + Schedule.plural)
export class ScheduleController extends BaseController<Schedule>{
    constructor(scheduleService: ScheduleService){
        super(scheduleService, Schedule);
    }
    async create(
        @Req() req: Request,
        @Res() res: Response,
        @Body() createEntityDto,
      ): Promise<ApiResult> {
        let results = await super.create(req,res,createEntityDto);
        return results;
      }
}
