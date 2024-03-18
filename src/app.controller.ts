import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'add-subscriber' })
  async addSubscriber(@Payload() subscriber: any, @Ctx() context: RmqContext) {
    // const newSubscriber =
    //   await this.subscribersService.addSubscriber(subscriber);
    console.log('subscriber', subscriber);

    const channel = context.getChannelRef();
    // console.log('channel', channel);
    const originalMsg = context.getMessage();
    console.log('originalMsg', originalMsg?.fields?.deliveryTag);
    channel.ack(originalMsg);

    return 'newSubscriber';
  }
}
