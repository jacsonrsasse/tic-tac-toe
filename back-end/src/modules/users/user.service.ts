import { inject, injectable } from "inversify";
import { userSymbols } from "./user.module";
import { CreateUserDtoType, createUserDto } from "./dto/create-user.dto";
import schemaTypeValidator from "@shared/validations/schema-type.validator";
import { UserRepositoryInterface } from "./interfaces/user-repository.interface";

@injectable()
export class UserService {
  constructor(
    @inject(userSymbols.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface
  ) {}

  public async create(createUser: CreateUserDtoType) {
    if (schemaTypeValidator(createUserDto, createUser)) {
      return false;
    }

    return this.userRepository.create(createUser);
  }
}
