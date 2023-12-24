import { Inject, Service } from "typedi";
import { CreateSocketConnection } from "./use-cases/create-socket-connection.usecase";

@Service()
export class WebSocketController {
  constructor(
    @Inject() private readonly createSocketConnection: CreateSocketConnection
  ) {}

  createConnection() {
    this.createSocketConnection.execute();
  }
}
