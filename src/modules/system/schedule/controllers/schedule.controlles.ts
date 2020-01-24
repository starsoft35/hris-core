import { Controller } from '@nestjs/common';
import {ScheduleService} from '../services/schedule.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Schedule } from '../entities/schedule.entity';

@Controller('api/' + Schedule.plural)
export class ScheduleController extends BaseController<Schedule>{
    constructor(scheduleService: ScheduleService){
        super(scheduleService, Schedule);
    }
}
