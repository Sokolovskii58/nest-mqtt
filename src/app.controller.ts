import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {

    @MessagePattern('sum')
    sum(data: number[]): number {
    return data.reduce((a, b) => a + b, 0);

  }

}
