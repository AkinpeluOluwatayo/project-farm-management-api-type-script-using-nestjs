import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Animal extends Document {
  @Prop()
  name: string;

  @Prop()
  animalType: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
