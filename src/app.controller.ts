import { Get, Controller, Render, Req, Res, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  /**
   *
   * @param appService
   */
  constructor(private readonly appService: AppService) {}

  /**
   *
   * @param request
   * @param response
   */

  @Get()
  async index(@Req() request, @Res() response) {
    if (request.session && request.session.user) {
      // ToDo: Implementation to be completed in this condition block
    } else {
      const app = await this.appService.getLoginApp();
      response.redirect('/api/apps/' + app.name.toLowerCase().split(' ').join('') + '/' + app.launchpath);
    }
  }
}
