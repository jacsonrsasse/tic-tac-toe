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

  listAll(): Promise<void | User[]> {
    throw new Error("Method not implemented.");
  }

  delete(
    deleteUser: DeleteUserDtoType
  ): Promise<void | { deletedUserId: any }> {
    throw new Error("Method not implemented.");
  }

  private createUserKey(connectionId: string): string {
    return `${this.USER_CONSTANT_KEY}:${connectionId}`;
  }
}
