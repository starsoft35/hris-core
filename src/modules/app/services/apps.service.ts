import { BaseService } from 'src/core/services/base.service';
import { App } from '../entities/apps.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppsService extends BaseService<App> {
    constructor(
        @InjectRepository(App)
        appsRepository: Repository<App>,
    ) {
        super(appsRepository, App);
    }
}
