import { InversifyTypes } from "@config/inversify";
import { DeleteUserDtoType } from "@modules/users/dto/delete-user.dto";
import { UserRepositoryInterface } from "@modules/users/repositories/interfaces/user-repository.interface";
import { inject, injectable } from "inversify";

@injectable()
export class DeleteSessionUseCase {
  constructor(
    @inject(InversifyTypes.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface
  ) {}

  execute(deleteUser: DeleteUserDtoType) {
    return this.userRepository.delete(deleteUser);
  }
}
