import { Inject, Service } from "typedi";
import { CreateSocketConnection } from "./use-cases/create-socket-connection.usecase";

@Service()
export class WebSocketController {
  constructor(
    @Inject() private readonly createSocketConnection: CreateSocketConnection
  ) {}

  executeUseCases() {
    this.createSocketConnection.execute();
  }
}
