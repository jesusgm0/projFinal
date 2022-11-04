import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { validate } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config= new DocumentBuilder().
  setTitle('GeneratEdu')
  .setDescription('Projeto Integrador')
  .setContact('GenerateEdu brasil Brasil', 'www.gerareducacao.com.br', 'equipegeneratedu2022@gmail.com')
  .setVersion('1.0')
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document)
  


  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen(process.env.PORT ||5000);
}
bootstrap();

