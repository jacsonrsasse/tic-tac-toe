import { Service } from "typedi";
import { CreateUserSchemaType } from "./dto/create-user-schema.dto";

@Service()
export class UserRepository {
  public async create(createUser: CreateUserSchemaType) {}
}
