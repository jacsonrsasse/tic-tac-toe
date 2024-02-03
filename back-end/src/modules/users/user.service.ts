import { injectable } from "inversify";
import { UserRepository } from "./repositories/drizzle/user.repository";
import { CreateUserDtoType, createUserDto } from "./dto/create-user.dto";
import schemaTypeValidator from "@shared/validations/schema-type.validator";

@injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(createUser: CreateUserDtoType) {
    if (schemaTypeValidator(createUserDto, createUser)) {
      return false;
    }

    return this.userRepository.create(createUser);
  }
}
