import { injectable } from "inversify";
import { UserRepositoryInterface } from "../interfaces/user-repository.interface";
import { User } from "@modules/users/entities/user.entity";
import { CreateUserDtoType } from "@modules/users/dto/create-user.dto";
import { DeleteUserDtoType } from "@modules/users/dto/delete-user.dto";
import { RedisClientService } from "@shared/services/redis-client.service";
import { convertUndefinedPropertiesToNull } from "@shared/utils/undefinable-to-null.util";

@injectable()
export class UserRepository implements UserRepositoryInterface {
  private USER_CONSTANT_KEY = "user_connection";

  constructor(private readonly redisClientService: RedisClientService) {}

  async create(createUser: CreateUserDtoType): Promise<void | User> {
    const key = this.createUserKey(createUser.connectionId);
    const userData: User = {
      userId: createUser.connectionId,
      ...createUser,
    };
    await this.redisClientService.setJsonData(key, userData);

    return userData;
  }

  async listAll(): Promise<void | User[]> {
    return this.redisClientService.getAllAsJson<User>(
      `${this.USER_CONSTANT_KEY}:*`
    );
  }

  async delete(
    deleteUser: DeleteUserDtoType
  ): Promise<void | { deletedUserId: string }> {
    await this.redisClientService.delete(this.createUserKey(deleteUser.id));

    return { deletedUserId: deleteUser.id };
  }

  private createUserKey(connectionId: string): string {
    return `${this.USER_CONSTANT_KEY}:${connectionId}`;
  }
}
