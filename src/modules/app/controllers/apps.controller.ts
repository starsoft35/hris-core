import { BaseController } from '../../../core/controllers/base.contoller';
import { App } from '../entities/apps.entity';
import { AppsService } from '../services/apps.service';
import { Controller, Get, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller(App.plural)
export class AppsController extends BaseController<App> {
    constructor(service: AppsService) {
        super(service, App);
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
