import { IsDateString, IsString } from 'class-validator';

export class FeedingRecordRequest {
  @IsString()
  feedType: string;

  @IsString()
  quantity:string;

  @IsDateString()
  date: string;

  @IsString()
  animal: string;
}