import { IsString, MinLength, MaxLength } from 'class-validator';

export class CreateSessionDto {
  @IsString()
  @MinLength(8)
  @MaxLength(50)
  nickname: string;

  @IsString()
  connectionId: string;
}
