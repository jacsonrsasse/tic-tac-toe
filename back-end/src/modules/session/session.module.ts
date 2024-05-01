import { Module } from '@nestjs/common';
import { SharedModule } from '@shared/shared.module';
import { UserModule } from '@modules/user/user.module';

import { SessionController } from './session.controller';

import { CreateSessionUseCase } from './use-cases/create-session.usecase';
import { DeleteSessionUseCase } from './use-cases/delete-session.usecase';

@Module({
  imports: [SharedModule, UserModule],
  controllers: [SessionController],
  providers: [CreateSessionUseCase, DeleteSessionUseCase],
})
export class SessionModule {}
