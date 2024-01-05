import { Inject, Service } from "typedi";
import { UserRepository } from "./user.repository";
import {
  CreateUserSchemaType,
  createUserSchemaDto,
} from "./dto/create-user-schema.dto";
import schemaTypeValidator from "@shared/validations/schema-type.validator";

@Service()
export class UserService {
  constructor(@Inject() private readonly userRepository: UserRepository) {}

  public async create(createUser: CreateUserSchemaType) {
    if (schemaTypeValidator(createUserSchemaDto, createUser)) {
      return false;
    }

    const user = await this.userRepository.create(createUser);
  }
}
