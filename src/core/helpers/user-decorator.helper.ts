import { createParamDecorator } from "@nestjs/common";

export const AuthenticatedUser = createParamDecorator((data, req) => {
    return req.session.user;
});