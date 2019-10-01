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
    async fetchAnalyticsRecords(@Param() params) {
        return await this.analyticsService.getAnalyticsRecords(params.formid);
    }
    @Get('generate')
    async fetchAnalyticsGenerate() {
        return await this.analyticsService.generatePeriodStructureTables();
    }
}
