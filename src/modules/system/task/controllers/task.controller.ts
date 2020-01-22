import { Controller } from '@nestjs/common';
import {TaskService} from '../services/task.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Task } from '../entities/task.entity';

@Controller('api/' + Task.plural)
export class TaskController extends BaseController<Task>{
    constructor(taskService: TaskService){
        super(taskService, Task);
    }
}
