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
const passport = require("passport");
class AppAuthGuard {
    canActivate(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = Object.assign({}, defaultOptions);
            const httpContext = context.switchToHttp();
            const [request, response] = [
                httpContext.getRequest(),
                httpContext.getResponse()
            ];
            const passportFn = createPassportContext(request, response);
            const user = yield passportFn('bearer', options);
            if (user) {
                request.login(user, (res) => { });
            }
            return true;
        });
    }
}
exports.AppAuthGuard = AppAuthGuard;
const createPassportContext = (request, response) => (type, options) => new Promise((resolve, reject) => passport.authenticate(type, options, (err, user, info) => {
    try {
        return resolve(options.callback(err, user, info));
    }
    catch (err) {
        reject(err);
    }
})(request, response, resolve));
const defaultOptions = {
    session: true,
    property: 'user',
    callback: (err, user, info) => {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
//# sourceMappingURL=roles.guard.js.map