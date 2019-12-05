import { Controller } from '@nestjs/common';
import {ScheduleService} from '../services/Schedule.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Schedule } from '../entities/Schedule.entity';

@Controller('api/' + Schedule.plural)
export class ScheduleController extends BaseController<Schedule>{
    constructor(scheduleService: ScheduleService){
        super(scheduleService, Schedule);
    }
}
