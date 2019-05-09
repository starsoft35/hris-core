import { BaseService } from 'src/core/services/base.service';
import { Apps } from '../entities/apps.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppsService extends BaseService<Apps> {
    constructor(
        @InjectRepository(Apps)
        appsRepository: Repository<Apps>,
    ) {
        super(appsRepository);
    }

    get model() {
        return Apps;
    }
}
