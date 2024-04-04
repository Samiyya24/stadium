import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

// port     5432 5432 5432
const start = async () => {
  try {
    const config = new DocumentBuilder()
      .setTitle('Stadium finder ')
      .setDescription('Mini project stadium finder')
      .setVersion('1.0')
      .addTag('NodeJs, NestJs,Postgress, swagger, Sequalize, JWT, Bot, Sms, mailer')
      .build();
    const PORT = process.env.PORT || 3333;
    const app = await NestFactory.create(AppModule);
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
    app.setGlobalPrefix('api')
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());


    await app.listen(PORT, () => {
      console.log(`Server started at ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    
  }
};
start();
