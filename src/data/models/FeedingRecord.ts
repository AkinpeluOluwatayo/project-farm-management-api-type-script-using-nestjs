import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class FeedingRecord extends Document {
  @Prop()
  feedType: string;

  @Prop()
  quantity: string;

  @Prop()
  date: Date;

  @Prop()
  animal: string;
}

export const FeedingRecordSchema = SchemaFactory.createForClass(FeedingRecord);
