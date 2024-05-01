import { Injectable } from '@nestjs/common';
import { AuthTokenService } from '@shared/services/auth-token.service';
import { UserService } from '@modules/user/user.service';
import { CreateUser } from '@modules/user/types/user.types';

type CreateSession = CreateUser;

@Injectable()
export class CreateSessionUseCase {
  constructor(
    private readonly authTokenService: AuthTokenService,
    private readonly userService: UserService,
  ) {}

  async execute(createSession: CreateSession): Promise<[string, string]> {
    await this.userService.create(createSession);

    const [token, refreshToken] = this.authTokenService.generateTokens(
      JSON.stringify({ userId: 123 }),
    );

    return [token, refreshToken];
  }
}
