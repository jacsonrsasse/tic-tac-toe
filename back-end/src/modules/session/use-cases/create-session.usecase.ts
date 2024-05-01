import { CreateUserDtoType } from "@modules/users/dto/create-user.dto";
import { UserService } from "@modules/users/user.service";
import { AuthTokenService } from "@shared/services/auth-token.service";
import { inject, injectable } from "inversify";

@injectable()
export class CreateSessionUseCase {
  constructor(
    @inject(UserService)
    private readonly userService: UserService,
    @inject(AuthTokenService)
    private readonly authTokenService: AuthTokenService
  ) {}

  async execute(createUser: CreateUserDtoType): Promise<string[]> {
    const user = await this.userService.create(createUser);

    if (!user) {
      throw new Error("Failed to create a session");
    }

    const [token, refreshToken] = this.authTokenService.generateTokens(
      user.userId
    );

    return [token, refreshToken];
  }
}
