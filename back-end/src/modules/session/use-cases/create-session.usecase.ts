import { CreateUserSchemaType } from "@modules/users/dto/create-user-schema.dto";
import { UserRepository } from "@modules/users/user.repository";
import { injectable } from "inversify";

@injectable()
export class CreateSessionUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(loginCreateUser: CreateUserSchemaType) {
    return this.userRepository.create(loginCreateUser);
  }
}
