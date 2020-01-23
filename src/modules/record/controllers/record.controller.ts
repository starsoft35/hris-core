import { Controller, Post, Body, Param } from '@nestjs/common';
import { BaseController } from 'src/core/controllers/base.contoller';
import { Record } from 'src/modules/record/entities/record.entity';

import { RecordService } from '../services/record.service';

@Controller('api/' + Record.plural)
export class RecordsController extends BaseController<Record> {
  constructor(private readonly recordService: RecordService) {
    super(recordService, Record);
  }

  @Post(':record/recordValues')
    async getAll(@Param() params,
    @Body() createEntityDto) {
        console.log('Params:', params);
        console.log('createEntityDto:', createEntityDto)
        return  await this.recordService.saveRecordValues(params.record, createEntityDto);
        try {
          return  await this.recordService.saveRecordValues(params.record, createEntityDto);
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
