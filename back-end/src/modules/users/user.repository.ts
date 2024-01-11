import { injectable } from "inversify";
import { CreateUserDtoType } from "./dto/create-user.dto";
import { DrizzleClientService } from "@shared/services/drizzle-client.service";
import { users } from "@database/schema";
import { DeleteUserDtoType } from "./dto/delete-user.dto";
import { eq } from "drizzle-orm";

@injectable()
export class UserRepository {
  constructor(private readonly drizzleClientService: DrizzleClientService) {}

  public async create(createUser: CreateUserDtoType) {
    const user = await this.drizzleClientService
      .getClient()
      .insert(users)
      .values(createUser)
      .returning({
        userId: users.id,
      });

    if (!user) {
      throw new Error("Deu ruim pra criar o usuário");
    }

    return user;
  }

  public async listAll() {
    return this.drizzleClientService.getClient().select().from(users);
  }

  public async delete(deleteUser: DeleteUserDtoType) {
    return this.drizzleClientService
      .getClient()
      .delete(users)
      .where(eq(users.id, deleteUser.id))
      .returning({ deletedUserId: users.id });
  }
}
