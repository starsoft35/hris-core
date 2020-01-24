import { Controller, Get, UseGuards, Res, Param, Logger } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Process } from '../entities/process.entity';
import { ProcessService } from '../services/process.service';
import { SessionGuard } from '../../user/guards/session.guard';
import { ApiResult } from 'dist/core/interfaces';
import { getSuccessResponse } from 'dist/core/helpers/response.helper';
import { sanitizeResponseObject } from 'dist/core/utilities/sanitize-response-object';

@Controller('api/' + Process.plural)
export class ProcessController extends BaseController<Process>{
    constructor(processService: ProcessService){
        super(processService, Process);
    }

    /*
    *
    * @params 
    * 
    * 
    */
   @Get(':id/run')
   @UseGuards(SessionGuard)
   async getProcess(@Res() res: Response, @Param() params): Promise<ApiResult> {
 let logs = new Logger('Process is Running')
     return logs;
   }
    

}
