import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskService } from '../services/task.service';
import { Repository } from 'typeorm';

import { Task } from '../entities/task.entity';

@Injectable()
export class BackgroundProcess {
  protected task:Task
  constructor(private taskService: TaskService) {}
  async start(task:Task){
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
  async run(){
      throw('Run Not Implemented')
  }
  async log(logdetails:{type:'ERROR'|'INFO'|'SUCCESS'|'WARNING',message:string,code?:number}){
    this.task.log.push(logdetails);
    return await this.taskService.update(this.task);
  }
}
