import { IsString, IsDate, IsDateString } from 'class-validator';

export class AnimalHealthRecordResponse {
  @IsString()
  id: string;

  @IsString()
  animal: string;

  @IsString()
  description: string;

  @IsDateString()
  date: string;

}
