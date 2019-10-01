"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class SessionGuard {
    canActivate(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const httpContext = context.switchToHttp();
            const request = httpContext.getRequest();
            return true;
            // console.log(request.headers)
            // try {
            //     if (request.session.user) {
            //         request.session.previousPath = request.path;
            //         return true;
            //     }
            //     if (request.headers['authorization']) {
            //         let user = await User.authenticateUserByToken(request.headers['authorization'].replace('Basic ', ''));
            //         if (user) {
            //             request.session.user = user;
            //             return true;
            //         }
            //     }
            // } catch (e) {
            //     console.log(e.stack);
            //     // throw new Error('Not In Session');
            // }
        });
    }
}
exports.SessionGuard = SessionGuard;
exports.SessionUser = common_1.createParamDecorator((data, req) => {
    return req.session.passport.user;
});
//# sourceMappingURL=session.guard.js.map