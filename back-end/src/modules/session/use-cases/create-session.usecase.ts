import { CreateUserDtoType } from "@modules/users/dto/create-user.dto";
import { UserRepository } from "@modules/users/user.repository";
import { injectable } from "inversify";

@injectable()
export class CreateSessionUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(createUser: CreateUserDtoType) {
    return this.userRepository.create(createUser);
  }
}
