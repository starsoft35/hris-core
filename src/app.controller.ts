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
    let app;
    if (request.session && request.session.user) {
      app = request.session.user.userRoles[0].landingPage;
      console.log('App:', app);
    } else {
      app = await this.appService.getLoginApp();
    }
    response.redirect('/api/apps/' + app.name.toLowerCase().split(' ').join('') + '/' + app.launchpath);
  }
}
