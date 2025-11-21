import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AnimalType extends Document {
  @Prop()
  typeName: string;
}

export const AnimalTypeSchema = SchemaFactory.createForClass(AnimalType);