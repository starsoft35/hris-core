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
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const session = require("express-session");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        /*const options = new DocumentBuilder()
          .setTitle('Cats example')
          .setDescription('The cats API description')
          .setVersion('1.0')
          .addTag('cats')
          .build();
        const document = SwaggerModule.createDocument(app, options);
        SwaggerModule.setup('api', app, document);*/
        app.use(helmet());
        app.use(session({
            secret: 'secret-key',
            name: 'sess-tutorial',
            resave: false,
            saveUninitialized: false
        }));
        //app.use(csurf());
        app.use(rateLimit({
            windowMs: 15 * 60 * 1000,
            max: 100,
        }));
        app.use(compression());
        //app.setGlobalPrefix('api');
        yield app.listen(3000);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map