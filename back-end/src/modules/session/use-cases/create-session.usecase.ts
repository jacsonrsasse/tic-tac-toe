import { Injectable } from '@nestjs/common';
import { DtoToInterface } from '@utils/dto-to-type.util';
import { AuthTokenService } from '@shared/services/auth-token.service';
import { UserService } from '@modules/user/user.service';
import { CreateUserDto } from '@modules/user/dto/create-user.dto';

interface CreateSession {
  data: DtoToInterface<CreateUserDto>;
}

@Injectable()
export class CreateSessionUseCase {
  constructor(
    private readonly authTokenService: AuthTokenService,
    private readonly userService: UserService,
  ) {}

  async execute({ data }: CreateSession): Promise<[string, string]> {
    await this.userService.create({ data });

    const [token, refreshToken] = this.authTokenService.generateTokens(
      JSON.stringify({ userId: 123 }),
    );

    return [token, refreshToken];
  }
}
