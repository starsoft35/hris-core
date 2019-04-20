import { Body, Get, Post, Put, Param, Delete, Query } from '@nestjs/common';
import { ModelService } from './model.service';

export class ModelController<T> {
  constructor(private readonly modelService: ModelService<T>) {}
  @Get()
  async findAll(@Query() query): Promise<Object> {
    const pageSize = query.pageSize || 50;
    const page = query.page || 1;
    console.log('params:', page - 1);

    let results = {};
    if (query.paging === 'false') {
      results[this.plural] = await this.modelService.findAll();
    } else {
      const [result, total] = await this.modelService.findAndCount({
        where: query.filter ? this.convertWhere(query.filter) : {},
        take: pageSize,
        skip: page - 1,
      });
      results['pager'] = {
        page: +page,
        pageCount: result.length,
        total: total,
        pageSize: +pageSize,
        nextPage: '/' + this.plural + '?page=' + (page + 1),
      };
      results[this.plural] = result;
    }
    return results;
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Object> {
    console.log(params.id);
    var result = await this.modelService.findOneById(params.id);
    console.log('result:', result);
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
  async findOneRelation(@Param() params): Promise<Object> {
    console.log(params.id);
    var result = await this.modelService.findOneById(params.id);
    console.log('result:', result);
    if (result) {
      let returnResult = {};
      returnResult[params.relation] = result[params.relation];
      return returnResult;
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
  async create(@Body() createEntityDto): Promise<Object> {
    return await this.modelService.create(createEntityDto);
  }

  @Put(':id')
  async update(@Param() params, @Body() updateEntityDto): Promise<Object> {
    var result = await this.modelService.findOneById(params.id);
    if (result) {
      return await this.modelService.update(params.id, updateEntityDto);
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
  async delete(@Param() params): Promise<Object> {
    let results = await this.modelService.delete(params.id);
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
  convertWhere(filter) {
    let filters = [];
    let conditions = [];
    if (typeof filter === 'string') {
      filters.push(filter);
    } else {
      filters = filter;
    }
    filters.forEach(f => {
      let filterSplit = f.split(':');
      let condition = {};
      if (filterSplit[1] === 'eq') {
        condition[filterSplit[0]] = filterSplit[2];
      }
      conditions.push(condition);
    });
    console.log('params:', conditions);
    return conditions;
  }

  get plural() {
    throw Error('Plural Not set');
    return 'undefined';
  }
}
