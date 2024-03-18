import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrdersDocument = HydratedDocument<Orders>;

@Schema()
export class Orders {
  @Prop()
  store: string;

  @Prop({ default: Date })
  time: Date;

  @Prop({ type: Object })
  ordersData: object;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);
