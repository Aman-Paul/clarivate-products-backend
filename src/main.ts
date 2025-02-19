import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './exceptions/global-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes( new ValidationPipe({
    whitelist: true,
    stopAtFirstError: true
  }));

  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(3333);
}
bootstrap();
