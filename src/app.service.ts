import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { App } from './modules/app/entities/apps.entity';
import { BaseService } from './core/services/base.service';

@Injectable()
export class AppService extends BaseService<App> {
    constructor(
        @InjectRepository(App)
        public appsRepository: Repository<App>,
    ) {
        super(appsRepository, App);
    }

    async getLoginApp(): Promise<App> {
        return await this.appsRepository.findOne();
    }
}
