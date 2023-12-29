import { Inject, Service } from "typedi";
import { CreateSocketConnectionUseCase } from "./use-cases/create-socket-connection.usecase";

@Service()
export class WebSocketController {
  constructor(
    @Inject()
    private readonly createSocketConnectionUseCase: CreateSocketConnectionUseCase
  ) {}

  createConnection() {
    this.createSocketConnectionUseCase.execute();
  }
}
