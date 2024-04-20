import { ContainerModule, interfaces } from "inversify";
import { CreateSessionUseCase } from "./use-cases/create-session.usecase";
import { DeleteSessionUseCase } from "./use-cases/delete-session.usecase";
import { inversifyAutoBind } from "@config/inversify/inversify-auto-bind";

const sessionSymbols = {
  CREATE_SESSION: Symbol.for(CreateSessionUseCase.name),
  DELETE_SESSION: Symbol.for(DeleteSessionUseCase.name),
};

const autoBind = {
  [sessionSymbols.CREATE_SESSION]: CreateSessionUseCase,
  [sessionSymbols.DELETE_SESSION]: DeleteSessionUseCase,
};

const sessionModule = new ContainerModule((bind: interfaces.Bind) => {
  inversifyAutoBind(autoBind, bind);
});

export * from "@modules/session/session.controller";
export { sessionModule, sessionSymbols };
