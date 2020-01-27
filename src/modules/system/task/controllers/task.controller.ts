import { Controller, Get, Query } from '@nestjs/common';
import {TaskService} from '../services/task.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Task } from '../entities/task.entity';
import { Connection } from 'typeorm';
import { Analytics } from '../processes/analytics.process';
import { OrgUnitGenerator } from '../processes/orgunit-generator.process';
import { PeriodGenerator } from '../processes/period-generator.process';

@Controller('api/' + Task.plural)
export class TaskController extends BaseController<Task>{
    constructor(private taskService: TaskService,private connetion:Connection){
        super(taskService, Task);
    }

    @Get('analytics/generate')
  async fetchAnalyticsGenerate(@Query() query) {
    console.log('Running:', query);
    let task = await this.taskService.createEmptyTask('Task Name');
    let processes = [];
    if (query.analyticsTables === 'true') {
      console.log('Running Analytics');
      processes.push((new Analytics(this.taskService, this.connetion)).start(task));
    }
    if (query.periodTable === 'true') {
      processes.push((new OrgUnitGenerator(this.taskService, this.connetion)).start(task));
    }
    if (query.organisationUnitTable === 'true') {
      processes.push(
        (new PeriodGenerator(this.taskService, this.connetion)).start(task)
      );
    }
    Promise.all(processes)
      .then(() => {
      })
      .catch(error => console.log(error, 'Process failed with errors'));
    return task;
  }
}
