import { CanActivate, ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { User } from '../entities/user.entity';

export class SessionGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const httpContext = context.switchToHttp();
        const request = httpContext.getRequest();
        // console.log(request.headers)
        console.log('Path:', request.path);
        try {
            if (request.session.user) {
                request.session.previousPath = request.path;
                return true;
            }
            if (request.headers['authorization']) {
                console.log('Here:', request.headers['authorization'].replace('Basic ', ''));
                let user = await User.authenticateUserByToken(request.headers['authorization'].replace('Basic ', ''));
                //console.log('Here: ', user);
                if (user) {
                    request.session.user = user;
                    return true;
                }
            }
        } catch (e) {
            console.log(e.stack);
            throw new Error('Not In Session');
        }
    }
}
export const SessionUser = createParamDecorator((data, req) => {
    return req.session.passport.user;
})