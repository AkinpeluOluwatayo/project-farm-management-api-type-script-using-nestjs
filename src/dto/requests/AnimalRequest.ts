import { IsString } from 'class-validator';

export class AnimalRequest {
  @IsString()
  name: string;

  @IsString()
  animalType: string;
}
