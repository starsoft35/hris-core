import { Controller } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Process } from '../entities/process.entity';
import { ProcessService } from '../services/process.service';

@Controller('api/' + Process.plural)
export class processController extends BaseController<Process>{
    constructor(processService: ProcessService){
        super(processService, Process);
    }
}
