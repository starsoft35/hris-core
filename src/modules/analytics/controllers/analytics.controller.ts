import { Body, Get, Post, Put, Param, Delete, Query, UseGuards, Controller } from '@nestjs/common';
import { SessionGuard } from 'src/modules/user/guards/session.guard';
import { AnalyticsService } from '../services/analytics.service';

@Controller('api/analytics')
export class AnalyticsController{
    constructor(private analyticsService: AnalyticsService){}
    @Get()
    fetchAnalytics(): string {
        return 'This action returns all cats';
    }
    @Get('records/:formid')
    async fetchAnalyticsRecords(@Param() params, @Query() query) {
        console.log('query:', query);
        let pe;
        let ou;
        query.dimension.forEach((dimension) => {
            let split = dimension.split(':');
            if(split[0] === 'pe'){
                pe = split[1].split(';');
            } if (split[0] === 'ou') {
                ou = split[1].split(';');
            }
        })
        if(!pe || pe[0] === ''){
            return {
                status:'ERROR',
                message:'Period dimension not found'
            }
        }
        if (!ou || ou[0] === '') {
            return {
                status: 'ERROR',
                message: 'Organisation Unit dimension not found'
            }
        }
        return await this.analyticsService.getAnalyticsRecords(params.formid, ou, pe);
    }
    @Get('generate')
    async fetchAnalyticsGenerate() {
        return await this.analyticsService.generateAnalyticsTables();
    }
}
