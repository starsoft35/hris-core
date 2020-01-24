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
    const execute = Function('parameters', this.process.code);
    execute({});
  }
}
