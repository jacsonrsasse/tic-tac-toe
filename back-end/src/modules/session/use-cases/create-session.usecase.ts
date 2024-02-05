import { InversifyTypes } from "@config/inversify";
import { CreateUserDtoType } from "@modules/users/dto/create-user.dto";
import { UserRepositoryInterface } from "@modules/users/repositories/interfaces/user-repository.interface";
import { generateUserTokens } from "@shared/utils/generate-user-tokens.util";
import { inject, injectable } from "inversify";

@injectable()
export class CreateSessionUseCase {
  constructor(
    @inject(InversifyTypes.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(createUser: CreateUserDtoType): Promise<string[]> {
    const user = await this.userRepository.create(createUser);

    if (!user) {
      throw new Error("Failed to create a session");
    }

    const [token, refreshToken] = generateUserTokens(user.userId);

    return [token, refreshToken];
  }
}
