import { Get, Param, UseGuards, Res, Req, Controller } from '@nestjs/common';
import { Request, Response } from 'express';import { ReportService } from '../services/report.service';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Report } from '../entities/report.entity';
import { SessionGuard } from '../../../modules/system/user/guards/session.guard';
import { ApiResult } from 'src/core/interfaces';
import {
  getSuccessResponse,
  genericFailureResponse,
} from 'src/core/helpers/response.helper';

@Controller('api/' + Report.plural)
export class ReportController extends BaseController<Report> {
  constructor(private ReportService: ReportService) {
    super(ReportService, Report);
  }

  /**
   *
   * @param req
   * @param res
   * @param params
   */
  @Get('/sqlViews/:id/data')
  @UseGuards(SessionGuard)
  async getData(
    //@Req() req: Request,
    @Res() res: Response,
    @Param() params,
  ): Promise<ApiResult> {
    try {
      return getSuccessResponse(res, await this.ReportService.envokeSQL(params.id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  @Get('/deliverymode')
  @UseGuards(SessionGuard)
  async delivery (){
    return this.ReportService.deliverymode()
  }
}
