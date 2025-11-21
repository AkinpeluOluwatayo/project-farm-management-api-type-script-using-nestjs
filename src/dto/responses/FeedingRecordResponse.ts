import { IsDateString, IsString } from 'class-validator';

export class FeedingRecordResponse {
  @IsString()
  animal: string;

  @IsString()
  feedType: string;

  @IsString()
  quantity:string;

  @IsDateString()
  date:string;
  


}