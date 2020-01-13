import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/Task.entity';
import {Status} from '../status.models';
@Injectable()
export class TaskService extends BaseService<Task>{
    constructor(@InjectRepository(Task)
    taskRepository: Repository<Task>,
    ){
        super(taskRepository, Task);
    }
}
