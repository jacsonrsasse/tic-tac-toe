import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from './interfaces/user-repository.interface';
import { CreateUser, DeleteUser } from './types/user.types';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async create(createUser: CreateUser) {
    return this.userRepository.create(createUser);
  }

  public async delete(deleteUser: DeleteUser) {
    const { deletedUserId } = await this.userRepository.delete(deleteUser);
    return deletedUserId;
  }
}
