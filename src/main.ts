import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://test.mosquitto.org:1883',
    },
  });
  app.listen(() => console.log('Microservice is listening'));
  }
bootstrap();
