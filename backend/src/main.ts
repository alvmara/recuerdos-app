import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import "reflect-metadata"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  console.log('server port', process.env.PORT);

  await app.listen(process.env.PORT || 8080);
}

bootstrap();
