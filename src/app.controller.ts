import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {

  @MessagePattern('notifications')
  getNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {
    console.log(`Topic: ${context.getTopic()}`);
  }
  
}
