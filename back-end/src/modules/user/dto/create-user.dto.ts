import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nickname: string;

  @IsString()
  connectionId: string;

  @IsString()
  @IsOptional()
  ipAddress?: string;
}
