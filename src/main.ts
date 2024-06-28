import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ResponseInterceptor } from './interceptor/response.interceptor';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //it removes unwanted post response
    }),
  );

  app.enableCors({ origin: '*' });

  const config = new DocumentBuilder()
    .setTitle('squadra Api')
    .setDescription('this is the api for squadra ')
    .setVersion('1.0')
    .addTag('sms')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3333);
}
bootstrap();
