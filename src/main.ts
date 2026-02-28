import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import 'dotenv/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove unexpected properties
      forbidNonWhitelisted: true, // throw error if extra props
      transform: true, // automatically transform payload to DTO instances
    }),
  );

    const config = new DocumentBuilder()
    .setTitle('School Scheduling API')
    .setDescription('School Scheduling API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
