import { Controller, Get, Param, Query } from '@nestjs/common';
import { AuthenticatedUser } from 'src/core/helpers/user-decorator.helper';
import { TaskService } from 'src/modules/system/task/services/task.service';
import { AnalyticsService } from '../services/analytics.service';

@Controller('api/analytics')
export class AnalyticsController {
  constructor(
    private analyticsService: AnalyticsService,
    private taskService: TaskService,
  ) {}
  @Get()
  async fetchAnalytics(@Query() query, @AuthenticatedUser() user) {
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
    return this.analyticsService.fetchAnalytics(dx, pe, ou, {
      user: user,
    });
  }
  @Get('records/:formid')
  async fetchRecordsAnalytics(
    @Param() params,
    @Query() query,
    @AuthenticatedUser() user,
  ) {
    console.log('query:', query);
    let pe;
    let ou;
    let otherDimensions = {};
    if (!query.dimension) {
      return {
        status: 'ERROR',
        message:
          'No dimension was provided. Please provide period(pe) and organisation unit(ou) dimension',
      };
    }
    if (!Array.isArray(query.dimension)) {
      console.log(query.dimension);
      query.dimension = [query.dimension];
    }
    if (!Array.isArray(query.pe)) {
      pe = query.pe.split(';');
    }
    query.dimension.forEach(dimension => {
      let split = dimension.split(':');
      if (split[0] === 'ou') {
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

  @Get('training')
  async fetchTrainingAnalytics(
    @Param() params,
    @Query() query,
    @AuthenticatedUser() user,
  ) {
    console.log('query:', query);
    let pe;
    let ou;
    let otherDimensions = {};
    if (!query.dimension) {
      return {
        status: 'ERROR',
        message:
          'No dimension was provided. Please provide period(pe) and organisation unit(ou) dimension',
      };
    }
    if (!Array.isArray(query.dimension)) {
      console.log(query.dimension);
      query.dimension = [query.dimension];
    }
    if (!Array.isArray(query.pe)) {
      pe = query.pe.split(';');
    }
    query.dimension.forEach(dimension => {
      let split = dimension.split(':');
      if (split[0] === 'ou') {
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

  @Get('training/coverage')
  async fetchTrainingCoverageAnalytics(
    @Param() params,
    @Query() query,
    @AuthenticatedUser() user,
  ) {
    console.log('query:', query);
    let pe;
    let ou;
    let otherDimensions = {};
    if (!query.dimension) {
      return {
        status: 'ERROR',
        message:
          'No dimension was provided. Please provide period(pe) and organisation unit(ou) dimension',
      };
    }
    if (!Array.isArray(query.dimension)) {
      console.log(query.dimension);
      query.dimension = [query.dimension];
    }
    if (!Array.isArray(query.pe)) {
      pe = query.pe.split(';');
    }
    query.dimension.forEach(dimension => {
      let split = dimension.split(':');
      if (split[0] === 'ou') {
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
    return await this.analyticsService.getTrainingCoverageRecords(
      params.formid,
      ou,
      pe,
      otherDimensions,
    );
  }
}
