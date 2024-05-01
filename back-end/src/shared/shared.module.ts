import { Module } from '@nestjs/common';
import { AuthTokenService } from './services/auth-token.service';

@Module({
  providers: [AuthTokenService],
  exports: [AuthTokenService],
})
export class SharedModule {}
