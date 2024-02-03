import { InversifyTypes } from "@config/inversify";
import { CreateUserDtoType } from "@modules/users/dto/create-user.dto";
import { UserRepositoryInterface } from "@modules/users/repositories/interfaces/user-repository.interface";
import { inject, injectable } from "inversify";
import { sign } from "jsonwebtoken";

@injectable()
export class CreateSessionUseCase {
  constructor(
    @inject(InversifyTypes.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface
  ) {}

  async execute(createUser: CreateUserDtoType) {
    const user = await this.userRepository.create(createUser);

    if (!user) return;

    const token = sign(
      {},
      "XxFoPIdVeTl0c9OjdyIzALGCRC5eumeDrC5FHmwzXfB9fJArzxOXPrhRszB5bEMV",
      {
        subject: user.userId,
      }
    );
  }
}
