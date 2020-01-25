import { createParamDecorator } from "@nestjs/common";

export const AuthenticatedUser = createParamDecorator((data, req) => {
    console.log('What:',req.session)
    return req.session.user;
});