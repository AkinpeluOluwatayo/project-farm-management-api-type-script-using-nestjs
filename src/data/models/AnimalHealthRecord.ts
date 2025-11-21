import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AnimalHealthRecord extends Document {
  @Prop()
  description: string;

  @Prop()
  date: Date;

  @Prop()
  animal: string;
}

export const AnimalHealthRecordSchema = SchemaFactory.createForClass(AnimalHealthRecord);
