import { AllExceptionsFilter } from './api/exception/http-exception.filter';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const microservice1 = app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  });

  await app.startAllMicroservices();
  await app.listen(3003);

  // const config = new DocumentBuilder()
  //   .setTitle('SPenguin auth service')
  //   .setDescription('SPenguin auth service')
  //   .setVersion('1.0')
  //   .build();

  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);

  // let corsOrigin = ['http://localhost:4200', 'http://front.eola.local', 'http://ph.local/']

  // const httpAdapter  = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  // app.enableCors({
  //   origin: [
  //     'http://localhost:4200',
  //     'http://localhost:4200/',
  //     'http://ph.local/',
  //     'http://ph.local',
  //   ],
  //   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  //   credentials: true,
  // });

}
bootstrap();
