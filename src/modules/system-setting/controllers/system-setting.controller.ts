import { Controller, Get, Param, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import {
  genericFailureResponse,
  getSuccessResponse,
} from 'src/core/helpers/response.helper';
import { ApiResult } from 'src/core/interfaces';
import { SessionGuard } from 'src/modules/system/user/guards/session.guard';

import { SystemInfo } from '../entities/system-info.entity';
import { SystemInfoService } from '../services/system-info.service';
import { SystemSettingService } from '../services/system-setting.service';

@Controller('api/' + SystemInfo.plural)
// @UseGuards(AuthGuard())
export class SystemSettingController {
  constructor(private readonly systemSettingService: SystemSettingService) {
    // super(systemInfoService, SystemInfo);
  }

  @Get()
  @UseGuards(SessionGuard)
  async findOne(
    @Req() req: Request,
    @Res() res: Response,
    @Param() params,
  ): Promise<ApiResult> {
    try {
      const isExist = await this.systemSettingService.find();
      const getResponse = isExist;
      if (isExist !== undefined) {
        return getSuccessResponse(res, getResponse);
      } else {
        return genericFailureResponse(res, params);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
