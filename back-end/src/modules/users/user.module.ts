import { ContainerModule, interfaces } from "inversify";
import { PutUserInLoobyUseCase } from "./use-cases/put-user-in-looby.usecase";
import { inversifyAutoBind } from "@config/inversify/inversify-auto-bind";
import { UserRepositoryInterface } from "./repositories/interfaces/user-repository.interface";
import { UserRepository } from "./repositories/redis/user.respository";

const userSymbols = {
  USER_REPOSITORY: Symbol.for("UserRepositoryInterface"),
  PUT_USER_IN_LOBBY: Symbol.for(PutUserInLoobyUseCase.name),
};

const autoBind = {
  [userSymbols.PUT_USER_IN_LOBBY]: PutUserInLoobyUseCase,
};

const userModule = new ContainerModule((bind: interfaces.Bind) => {
  inversifyAutoBind(autoBind, bind);

  bind<UserRepositoryInterface>(userSymbols.USER_REPOSITORY).to(UserRepository);
});

export { userModule, userSymbols };
