import { Body, Get, Post, Put, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { BaseService } from '../services/base.service';
import { Pager, ApiResult } from '../interfaces';
import { getPagerDetails } from '../utilities';
import { HRISBaseEntity } from '../entities/base-entity';
import { SessionGuard } from 'src/modules/user/guards/session.guard';

export class BaseController<T extends HRISBaseEntity> {
  constructor(private readonly baseService: BaseService<T>, private readonly Model: typeof HRISBaseEntity) {}
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
      number
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
  async findOne(@Param() params): Promise<ApiResult> {
    console.log('WHat');
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

  @Delete(':id')
  async delete(@Param() params): Promise<ApiResult> {
    const results = await this.baseService.delete(params.id);
    if (results.affected === 1) {
      return {
        httpStatus: 'OK',
        httpStatusCode: 200,
        status: 'OK',
        response: {
          responseType: 'ObjectReport',
          uid: params.id,
          klass: 'org.hisp.dhis.user.User',
        },
      };
    } else {
      return {
        httpStatus: 'Not Found',
        httpStatusCode: 404,
        status: 'ERROR',
        message: 'User with id ' + params.id + ' could not be found.',
        response: {
          responseType: 'ErrorReport',
          uid: params.id,
          klass: 'org.hisp.dhis.user.User',
        },
      };
    }
  }

  // TODO: give descriptive name for this method
  get plural() {
    throw Error('Plural Not set');
    return 'undefined';
  }
}
