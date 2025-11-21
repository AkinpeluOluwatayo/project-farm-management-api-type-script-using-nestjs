import { IsString } from 'class-validator';

export class AnimalHealthRecordResponse {
  @IsString()
  description:string;

  @IsString()
  date:string;

}