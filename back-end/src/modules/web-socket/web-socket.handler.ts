import { CreateSocketConnectionUseCase } from "./use-cases/create-socket-connection.usecase";
import { injectable } from "inversify";

@injectable()
export class WebSocketHandler {
  constructor(
    private readonly createSocketConnectionUseCase: CreateSocketConnectionUseCase
  ) {}

  createConnection() {
    this.createSocketConnectionUseCase.execute();
  }
}
