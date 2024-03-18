import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Orders } from './schemas/orders.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(Orders.name) private ordersModel: Model<Orders>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createOrders(data: any) {
    await this.ordersModel.create(data);
    console.log(data);
    return '';
  }
}
