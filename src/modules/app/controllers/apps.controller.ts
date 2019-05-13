import { BaseController } from 'src/core/controllers/base.contoller';
import { Apps } from '../entities/apps.entity';
import { AppsService } from '../services/apps.service';
import { Controller, Get, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('apps')
export class AppsController extends BaseController<Apps> {
    constructor(private appsService: AppsService) {
        super(appsService);
    }

    get plural() {
        return 'apps';
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file) {
        console.log(file);
        // const app = await this.appsService.create(addedApp);
        // super.create(addedApp);
        // return app;
    }
}
