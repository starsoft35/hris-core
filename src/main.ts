import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';
import * as session from 'express-session';
import * as helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('HRIS Web API')
    .setDescription(
      'API interface that will expose all data and metadata for development of HRIS system software for collection, collation, storage of Human resource for health Information.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.use(helmet());
  app.use(
    session({
      secret: 'secret-key',
      name: 'sess-tutorial',
      resave: false,
      saveUninitialized: false,
    }),
  );

  // app.use(csurf());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  app.use(compression());
  // app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
