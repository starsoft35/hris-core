import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as rateLimit from 'express-rate-limit';
import * as compression from 'compression';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  app.use(compression());
  //app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
