import { injectable } from "inversify";
import { UserRepositoryInterface } from "../interfaces/user-repository.interface";
import { User } from "@modules/users/entities/user.entity";
import { CreateUserDtoType } from "@modules/users/dto/create-user.dto";
import { DeleteUserDtoType } from "@modules/users/dto/delete-user.dto";
import { RedisClientService } from "@shared/services/redis-client.service";

@injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private readonly redisClientService: RedisClientService) {}

  create(createUser: CreateUserDtoType): Promise<void | User> {
    throw new Error("Method not implemented.");
  }

  listAll(): Promise<void | User[]> {
    throw new Error("Method not implemented.");
  }

  delete(
    deleteUser: DeleteUserDtoType
  ): Promise<void | { deletedUserId: any }> {
    throw new Error("Method not implemented.");
  }
}
