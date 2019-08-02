import { Get, Controller, Render, Req, Res, Param } from '@nestjs/common';
import { AppService } from './modules/app/services/apps.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async index(@Req() request, @Res() response) {
    if (request.session && request.session.user){

    } else {
      let app = await this.appService.getLoginApp();
      response.redirect('/api/apps/' + app.name.toLowerCase().split(' ').join('') + '/' + app.launchpath);
    }
  }
}
