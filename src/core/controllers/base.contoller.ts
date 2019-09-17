import {
  Body,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Query,
  UseGuards,
  Res,
  Req,
} from '@nestjs/common';
import { BaseService } from '../services/base.service';
import { Pager, ApiResult } from '../interfaces';
import { getPagerDetails } from '../utilities';
import { HRISBaseEntity } from '../entities/base-entity';
import { SessionGuard } from 'src/modules/user/guards/session.guard';
import { Request, Response } from 'express';
import { DeleteResponse } from '../interfaces/response/delete.interface';
import {
  getSuccessResponse,
  getFailureResponse,
} from '../helpers/response.helper';

export class BaseController<T extends HRISBaseEntity> {
  constructor(
    private readonly baseService: BaseService<T>,
    private readonly Model: typeof HRISBaseEntity,
  ) { }
  @Get()
  @UseGuards(SessionGuard)
  async findAll(@Query() query): Promise<ApiResult> {
    if (query.paging === 'false') {
      const allContents: T[] = await this.baseService.findAll();
      return { [this.Model.plural]: allContents };
    }

    const pagerDetails: Pager = getPagerDetails(query);

    const [contents, totalCount]: [
      T[],
      number,
    ] = await this.baseService.findAndCount(
      query.fields,
      query.filter,
      pagerDetails.pageSize,
      pagerDetails.page - 1,
    );

    return {
      pager: {
        ...pagerDetails,
        pageCount: contents.length,
        total: totalCount,
        nextPage: '/' + this.Model.plural + '?page=' + (pagerDetails.page + 1),
      },
      [this.Model.plural]: contents,
    };
  }

  @Get(':id')
  async findOne(
    @Req() req: Request,
    @Res() res: Response,
    @Param() params,
  ): Promise<ApiResult> {
    const result = await this.baseService.findOneByUid(params.id);

    if (result) {
      return result;
    } else {
      return {
        httpStatus: 'Not Found',
        httpStatusCode: 404,
        status: 'ERROR',
        message: 'User with id ' + params.id + ' could not be found.',
        response: {
          responseType: 'ErrorReport',
          uid: params.id,
        },
      };
    }
  }

  @Get(':id/:relation')
  async findOneRelation(@Param() params): Promise<ApiResult> {
    const result = await this.baseService.findOneByUid(params.id);
    if (result) {
      return { [params.relation]: result[params.relation] };
    } else {
      return {
        httpStatus: 'Not Found',
        httpStatusCode: 404,
        status: 'ERROR',
        message: 'User with id ' + params.id + ' could not be found.',
        response: {
          responseType: 'ErrorReport',
          uid: params.id,
        },
      };
    }
  }

  @Post()
  async create(@Body() createEntityDto): Promise<ApiResult> {
    return await this.baseService.create(createEntityDto);
  }

  @Put(':id')
  async update(@Param() params, @Body() updateEntityDto): Promise<ApiResult> {
    const result = await this.baseService.findOneByUid(params.id);
    if (result) {
      return await this.baseService.update(params.id, updateEntityDto);
    } else {
      return {
        httpStatus: 'Not Found',
        httpStatusCode: 404,
        status: 'ERROR',
        message: 'User with id ' + params.id + ' could not be found.',
        response: {
          responseType: 'ErrorReport',
          uid: params.id,
        },
      };
    }
  }

  /**
   *
   * @param params
   * @param req
   * @param res
   */
  @Delete(':id')
  async delete(
    @Param() params,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<ApiResult> {
    try {
      const isExist = await this.baseService.findOneByUid(params.id);
      if (isExist !== undefined) {
        const deleteResponse: DeleteResponse = await this.baseService.delete(
          params.id,
        );
        return getSuccessResponse(req, res, params, deleteResponse);
      } else {
        return getFailureResponse(req, res, params);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // TODO: give descriptive name for this method
  get plural() {
    throw Error('Plural Not set');
    return 'undefined';
  }
}
