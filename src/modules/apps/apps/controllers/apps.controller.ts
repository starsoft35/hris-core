import { BaseController } from 'src/core/controllers/base.contoller';
import { Apps } from '../entities/apps.entity';
import { AppsService } from '../services/apps.service';
import { Controller } from '@nestjs/common';

@Controller('apps')
export class AppsController extends BaseController<Apps> {
    constructor(appsService: AppsService) {
        super(appsService);
    }

    get plural() {
        return 'apps';
    }
}
