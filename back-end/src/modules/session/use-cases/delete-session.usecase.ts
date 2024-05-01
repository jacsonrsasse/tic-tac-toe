import { Injectable } from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { DeleteUser } from '@modules/user/types/user.types';

type DeleteSession = DeleteUser;

@Injectable()
export class DeleteSessionUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(deleteSession: DeleteSession): Promise<string> {
    return this.userService.delete(deleteSession);
  }
}
