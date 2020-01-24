import {
  Body,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Query,
  UseGuards,
  Controller,
} from '@nestjs/common';
import { AnalyticsService } from '../services/analytics.service';
import { TaskService } from 'src/modules/system/task/services/task.service';
import { errorMessage } from 'src/core/helpers/response.helper';

@Controller('api/analytics')
export class AnalyticsController {
  constructor(
    private analyticsService: AnalyticsService,
    private taskService: TaskService,
  ) {}
  @Get()
  async fetchAnalytics(@Query() query) {
    let pe;
    let ou;
    let dx;
    let otherDimensions = {};
    query.dimension.forEach(dimension => {
      let split = dimension.split(':');
      if (split[0] === 'pe') {
        pe = split[1].split(';');
      } else if (split[0] === 'ou') {
        ou = split[1].split(';');
      } else if (split[0] === 'dx') {
        dx = split[1].split(';');
      } else {
        otherDimensions[split[0]] = split[1];
      }
    });
    return this.analyticsService.fetchAnalytics(dx, pe, ou);
  }
  @Get('records/:formid')
  async fetchAnalyticsRecords(@Param() params, @Query() query) {
    console.log('query:', query);
    let pe;
    let ou;
    let otherDimensions = {};
    query.dimension.forEach(dimension => {
      let split = dimension.split(':');
      if (split[0] === 'pe') {
        pe = split[1].split(';');
      } else if (split[0] === 'ou') {
        ou = split[1].split(';');
      } else {
        otherDimensions[split[0]] = split[1];
      }
    });
    console.log(otherDimensions);
    if (!pe || pe[0] === '') {
      return {
        status: 'ERROR',
        message: 'Period dimension not found',
      };
    }
    if (!ou || ou[0] === '') {
      return {
        status: 'ERROR',
        message: 'Organisation Unit dimension not found',
      };
    }
    return await this.analyticsService.getAnalyticsRecords(
      params.formid,
      ou,
      pe,
      otherDimensions,
    );
  }
  @Get('generate')
  async fetchAnalyticsGenerate(@Query() query) {
    console.log('Running:', query);
    let task = await this.taskService.createEmptyTask('Task Name');
    let processes = [];
    if (query.analyticsTables) {
      console.log('Running Analytics');
      processes.push(this.analyticsService.generateAnalyticsTables());
    }
    if (query.periodTable) {
      processes.push(this.analyticsService.generatePeriodStructureTables());
    }
    if (query.organisationUnitTable) {
      processes.push(
        this.analyticsService.generateOrganisationUnitStructureTables(),
      );
    }
    Promise.all(processes)
      .then(() => {
      })
      .catch(error => console.log(error, 'Process failed with errors'));
    return task;
  }
}
