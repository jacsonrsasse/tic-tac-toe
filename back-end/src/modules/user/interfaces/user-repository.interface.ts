import { User } from '../entities/user.entity';
import { CreateUser, DeleteUser } from '../types/user.types';

export interface UserRepositoryInterface {
  create(createUser: CreateUser): Promise<User | void>;

  listAll(): Promise<User[] | void>;

  delete(deleteUser: DeleteUser): Promise<{ deletedUserId: User['userId'] }>;
}
