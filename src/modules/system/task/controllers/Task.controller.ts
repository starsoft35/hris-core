import { Controller } from '@nestjs/common';
import {TaskService} from '../services/Task.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Task } from '../entities/Task.entity';

@Controller('api/' + Task.plural)
export class TaskController extends BaseController<Task>{
    constructor(TaskService: TaskService){
        super(TaskService, Task);
    }
}
