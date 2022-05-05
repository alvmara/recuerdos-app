import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import "reflect-metadata"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  console.log('server port', process.env.SERVER_PORT);

  await app.listen(process.env.SERVER_PORT || 80);
}

bootstrap();
