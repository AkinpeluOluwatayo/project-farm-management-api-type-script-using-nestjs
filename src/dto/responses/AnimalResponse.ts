import { IsString } from 'class-validator';

export class AnimalResponse {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  animalType: string;
}
