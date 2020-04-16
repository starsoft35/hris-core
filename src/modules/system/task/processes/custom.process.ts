import { Task } from '../entities/task.entity';
import { BackgroundProcess } from './base.process';
import { Connection } from 'typeorm';
import {
  format,
  endOfMonth,
  startOfMonth,
  getDaysInMonth,
  endOfQuarter,
  startOfQuarter,
  differenceInDays,
  getDaysInYear,
  startOfYear,
  endOfWeek,
  startOfWeek,
  endOfYear,
} from 'date-fns';
import { Injectable } from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { Process } from '../../schedule/entities/process.entity';
import { ProcessService } from '../../schedule/services/process.service';

@Injectable()
export class CustomProcess extends BackgroundProcess {
  constructor(taskService: TaskService,private process:Process){
    super(taskService);
  }
  async run() {
    console.log('Running things');
    const execute = Function('context', 'console.log("This is happening")');
    console.log('COde:',this.process.code);
    execute({
      log:this.log
    });
  }
  async getProcessName():Promise<string>{
    return 'Custom Process '+ this.process.name;
  }
}
