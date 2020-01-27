import { Injectable } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { Task } from '../entities/task.entity';
import { ScheduleService } from '../../schedule/services/schedule.service';
import { job } from 'cron';

@Injectable()
export class BackgroundProcess {
  protected task: Task;
  constructor(
    private taskService: TaskService,
    private scheduleService: ScheduleService,
  ) {}
  async start(task: Task) {
    this.task = task;
    try{
      await this.run();
      await this.log({type:"SUCCESS",message:"Process finished successfully."});
    }catch(e){
      await this.log({type:"ERROR",message: "("+await this.getProcessName()+")" + e.message});
    }
  }
  async getProcessName():Promise<string>{
    throw('Run Not Implemented')
  }
  async run() {
    try {
      this.scheduleService.addCronJob(name, "60");  // ! ERROR missing argument 
    } catch {
      throw 'Cron Not Defined';
    }
  }
  async log(logdetails: {
    type: 'ERROR' | 'INFO' | 'SUCCESS' | 'WARNING';
    message: string;
    code?: number;
  }) {
    this.task.log.push(logdetails);
    return await this.taskService.update(this.task);
  }
}
