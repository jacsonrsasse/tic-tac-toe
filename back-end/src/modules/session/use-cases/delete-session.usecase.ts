import { DeleteUserDtoType } from "@modules/users/dto/delete-user.dto";
import { UserRepositoryInterface } from "@modules/users/interfaces/user-repository.interface";
import { userSymbols } from "@modules/users/user.module";
import { inject, injectable } from "inversify";

@injectable()
export class DeleteSessionUseCase {
  constructor(
    @inject(userSymbols.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface
  ) {}

  execute(deleteUser: DeleteUserDtoType) {
    return this.userRepository.delete(deleteUser);
  }
}
