import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';

import { Task } from '../entities/task.entity';

@Injectable()
export class TaskService extends BaseService<Task> {
  constructor(
    @InjectRepository(Task)
    taskRepository: Repository<Task>,
    private Task: Task,
    private Mode

  ) {
    super(taskRepository, Task);
  }
  async create(entity: any): Promise<any> {
    const model = new this.Mode();
    Object.keys(entity).forEach(key => {
      model[key] = entity[key];
    });

    // return model.save();
    return await this.Task.save(model);
  }
}
