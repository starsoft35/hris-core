import { Injectable, Logger } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from '../entities/schedule.entity';
import { SchedulerRegistry, Cron } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class ScheduleService extends BaseService<Schedule> {
  logger: Logger;
  scheduler: any;
  constructor(
    @InjectRepository(Schedule)
    scheduleRepository: Repository<Schedule>,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {
    super(scheduleRepository, Schedule);
  }

  async getProcess() {
    return this.findOneByUid;
  }
  @Cron('* * * * *', {
    name: 'dhis 2 hrhis sync',
  })
  triggerNotifications() {
    const job = this.schedulerRegistry.getCronJob('dhis 2 hrhis sync');

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
      `${name} will sync every ${seconds} seconds!`,
    );
  }
}
