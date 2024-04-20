import { CreateUserDtoType } from "@modules/users/dto/create-user.dto";
import { DeleteUserDtoType } from "@modules/users/dto/delete-user.dto";
import { User } from "@modules/users/entities/user.entity";

export interface UserRepositoryInterface {
  create(createUser: CreateUserDtoType): Promise<User | void>;

  listAll(): Promise<User[] | void>;

  delete(
    deleteUser: DeleteUserDtoType
  ): Promise<{ deletedUserId: User["userId"] } | void>;
}
