import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';

import { Task } from '../entities/task.entity';

@Injectable()
export class TaskService extends BaseService<Task> {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {
    super(taskRepository, Task);
  }
  async createEmptyTask(name:string): Promise<any> {
    return this.taskRepository.save({
      name: name,
      startedat: new Date(),
      log: [],
      status: "Started"
    });
  }
}
