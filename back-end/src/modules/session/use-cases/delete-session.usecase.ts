import { DeleteUserDtoType } from "@modules/users/dto/delete-user.dto";
import { UserRepository } from "@modules/users/user.repository";
import { injectable } from "inversify";

@injectable()
export class DeleteSessionUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(deleteUser: DeleteUserDtoType) {
    return this.userRepository.delete(deleteUser);
  }
}
