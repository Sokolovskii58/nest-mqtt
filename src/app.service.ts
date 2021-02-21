import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('MATH_SERVICE') private client: ClientProxy,
  ) {}  
  
  async sendMessage(): Promise<any> {
    const data: number[] = [5, 6];
    return this.client.send<number>('notifications', data);
  }

}

