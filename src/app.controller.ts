import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @MessagePattern('notifications')
  getNotifications(@Payload() data: number[], @Ctx() context: MqttContext) {
    console.log('data => ', data);
    console.log('topic => ', context.getTopic());
  }

  
}
