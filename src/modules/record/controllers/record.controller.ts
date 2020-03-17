import {
  Controller,
  Post,
  Body,
  Param,
  Query,
  Get,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Record } from 'src/modules/record/entities/record.entity';

import { RecordService } from '../services/record.service';
import { ApiResult } from 'src/core/interfaces';
import { SessionGuard } from 'src/modules/system/user/guards/session.guard';

@Controller('api/' + Record.plural)
export class RecordsController extends BaseController<Record> {
  constructor(private readonly recordService: RecordService) {
    super(recordService, Record);
  }

  @Get()
  @UseGuards(SessionGuard)
  async findAll(@Query() query): Promise<ApiResult> {
    console.log('Loading:', query);
    if (!(query.organisationUnit && query.form)) {
      throw new BadRequestException(
        'organisationUnit and form IDs must be passed',
      );
    }
    if (!query.filter) {
      query.filter = [];
    } else if (!Array.isArray(query.filter)) {
      query.filter = [query.filter];
    }
    query.filter.push(`organisationUnit:eq:${query.organisationUnit}`);
    query.filter.push(`form:eq:${query.form}`);
    return super.findAll(query);
  }
  @Post(':record/recordValues')
  async getAll(@Param() params, @Body() createEntityDto) {
    console.log('Params:', params);
    console.log('createEntityDto:', createEntityDto);
    return await this.recordService.saveRecordValues(
      params.record,
      createEntityDto,
    );
    try {
      return await this.recordService.saveRecordValues(
        params.record,
        createEntityDto,
      );
      // if (isIDExist !== undefined) {
      //   return entityExistResponse(res, isIDExist);
      // } else {
      //   const createdEntity = await this.baseService.create(createEntityDto);
      //   if (createdEntity !== undefined) {
      //     const isPropExcluded = delete createdEntity.id;
      //     return isPropExcluded
      //       ? postSuccessResponse(res, createdEntity)
      //       : postSuccessResponse(res, createdEntity);
      //   } else {
      //     return genericFailureResponse(res);
      //   }
      // }
    } catch (error) {
      //res.status(400).json({ error: error.message });
    }
  }
}
