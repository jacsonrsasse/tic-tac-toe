import { Inject, Service } from "typedi";
import { CreateUserSchemaType } from "./dto/create-user-schema.dto";
import { DrizzleClientService } from "@shared/services/drizzle-client.service";
import { users } from "@database/schema";

@Service()
export class UserRepository {
  constructor(
    @Inject() private readonly drizzleClientService: DrizzleClientService
  ) {}

  public async create(createUser: CreateUserSchemaType) {
    const user = await this.drizzleClientService
      .getClient()
      .insert(users)
      .values(createUser);

    if (!user) {
      throw new Error("Deu ruim pra criar o usuário");
    }

    return user;
  }
}
