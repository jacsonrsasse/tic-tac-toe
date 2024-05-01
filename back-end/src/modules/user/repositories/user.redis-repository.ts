import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserRepositoryInterface } from '../interfaces/user-repository.interface';
import { RedisClientAdapter } from 'src/adapters/redis-client.adapter';
import { CreateUser, DeleteUser } from '../types/user.types';

@Injectable()
export class UserRedisRepository implements UserRepositoryInterface {
  private USER_CONSTANT_KEY = 'user_connection';

  constructor(private readonly redisClientService: RedisClientAdapter) {}

  async create(createUser: CreateUser): Promise<void | User> {
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
      `${this.USER_CONSTANT_KEY}:*`,
    );
  }

  async delete(deleteUser: DeleteUser): Promise<{ deletedUserId: string }> {
    await this.redisClientService.delete(this.createUserKey(deleteUser.id));

    return { deletedUserId: deleteUser.id };
  }

  private createUserKey(connectionId: string): string {
    return `${this.USER_CONSTANT_KEY}:${connectionId}`;
  }
}
