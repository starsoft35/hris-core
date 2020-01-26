import { Controller, Res, Req, Body, Logger } from '@nestjs/common';
import { ScheduleService } from '../services/schedule.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Schedule } from '../entities/schedule.entity';
import { ApiResult } from 'dist/core/interfaces';
import { Request, Response } from 'express';
import { SchedulerRegistry, Cron } from '@nestjs/schedule';
import {CronJob} from 'cron';

@Controller('api/' + Schedule.plural)
export class ScheduleController extends BaseController<Schedule> {
  logger: Logger;
  scheduler: any;
  constructor(
    scheduleService: ScheduleService,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {
    super(scheduleService, Schedule);
  }
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createEntityDto,
  ): Promise<ApiResult> {
    let results = await super.create(req, res, createEntityDto);
    return results;
  }

  @Cron('* * * * *', {
    name: 'notifications',
  })
  triggerNotifications() {
    const job = this.schedulerRegistry.getCronJob('notifications');

    job.stop();
    console.log(job.lastDate());
  }
  addCronJob(name: string, seconds: string) {
    const job = new CronJob(`${seconds} * * * * *`, () => {
      this.logger.warn(`time (${seconds}) for job ${name} to run!`);
    });

    this.scheduler.addCronJob(name, job);
    job.start();

    this.logger.warn(
      `job ${name} added for each minute at ${seconds} seconds!`,
    );
  }

}
