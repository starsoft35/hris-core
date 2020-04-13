import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { AuthenticatedUser } from 'src/core/helpers/user-decorator.helper';
import { TaskService } from 'src/modules/system/task/services/task.service';
import { AnalyticsService } from '../services/analytics.service';
import { SessionGuard } from 'src/modules/system/user/guards/session.guard';

@Controller('api/analytics')
export class AnalyticsController {
  constructor(
    private analyticsService: AnalyticsService,
    private taskService: TaskService,
  ) {}
  @Get()
  @UseGuards(SessionGuard)
  async fetchAnalytics(@Query() query, @AuthenticatedUser() user) {
    let pe = [];
    let ou = [];
    let dx = [];
    let otherDimensions = {};
    query.dimension.forEach(dimension => {
      let split = dimension.split(':');
      if (split[0] === 'pe') {
        pe = pe.concat(split[1].split(';'));
      } else if (split[0] === 'ou') {
        ou = ou.concat(split[1].split(';'));
      } else if (split[0] === 'dx') {
        dx = dx.concat(split[1].split(';'));
      }
    });
    if(!Array.isArray(query.filter)){
      query.filter = [query.filter];
    }
    query.filter.forEach(dimension => {
      let split = dimension.split(':');
      if (split[0] === 'pe') {
        pe = pe.concat(split[1].split(';'));
      } else if (split[0] === 'ou') {
        ou = ou.concat(split[1].split(';'));
      } else if (split[0] === 'dx') {
        dx = dx.concat(split[1].split(';'));
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
    if (query.pe && !Array.isArray(query.pe)) {
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
    /*if (!pe || pe[0] === '') {
      return {
        status: 'ERROR',
        message: 'Period dimension not found',
      };
    }*/
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

  @Get('orgUnit/count')
  async fetchAnalyticsOrgUnitCount(
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
    if (query.pe && !Array.isArray(query.pe)) {
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
    /*if (!pe || pe[0] === '') {
      return {
        status: 'ERROR',
        message: 'Period dimension not found',
      };
    }*/
    if (!ou || ou[0] === '') {
      return {
        status: 'ERROR',
        message: 'Organisation Unit dimension not found',
      };
    }
    return await this.analyticsService.getAnalyticsOrgUnitCount(
      ou,
      pe,
      otherDimensions,
      {
        user: user
      }
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
      {
        user: user
      }
    );
  }
}
