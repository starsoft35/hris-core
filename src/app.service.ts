import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { App } from './modules/app/entities/apps.entity';
import { BaseService } from './core/services/base.service';
import { AppsService } from './modules/app/services/apps.service';

@Injectable()
export class AppService{
    constructor(private appsService: AppsService
    ) {
    }

    async getLoginApp(): Promise<App> {
        let apps = await this.appsService.findWhere({});
        return apps[0];
    }
}
