import { Controller, Get, UseGuards, Param, Query } from '@nestjs/common';
import { ModelService } from './model.service';

export class ModelController<T> {
  constructor(private readonly modelService: ModelService<T>) {}
  @Get()
  async findAll(@Query() query): Promise<Object> {
    const pageSize = query.pageSize || 50;
    const page = query.page || 1;
    console.log('params:', page - 1);
    
    let results = {};
    if (query.paging === 'false'){
      results[this.plural] = await this.modelService.findAll();
    }else {
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
        nextPage:
          'https://dhis.hisptz.org/dev/api/organisationUnits?page=2',
      };
      results[this.plural] = result;
    }
    return results;
  }

  convertWhere(filter){
    let filters = [];
    let conditions = [];
    if (typeof filter === 'string'){
      filters.push(filter);
    } else {
      filters = filter;
    }
    filters.forEach((f) => {
      let filterSplit = f.split(':');
      let condition = {};
      if (filterSplit[1] === 'eq') {
        condition[filterSplit[0]] = filterSplit[2];
      }
      conditions.push(condition);
    })
    console.log('params:', conditions);
    return conditions;
  }

  get plural() {
    throw Error('Plural Not set');
    return 'undefined';
  }
}
