import { injectable } from "inversify";
import { UserRepository } from "./user.repository";
import {
  CreateUserSchemaType,
  createUserSchemaDto,
} from "./dto/create-user-schema.dto";
import schemaTypeValidator from "@shared/validations/schema-type.validator";

@injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async create(createUser: CreateUserSchemaType) {
    if (schemaTypeValidator(createUserSchemaDto, createUser)) {
      return false;
    }

    return this.userRepository.create(createUser);
  }
}
