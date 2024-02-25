import { CreateSocketConnectionUseCase } from "./use-cases/create-socket-connection.usecase";
import { inject, injectable } from "inversify";

@injectable()
export class WebSocketHandler {
  constructor(
    @inject(CreateSocketConnectionUseCase)
    private readonly createSocketConnectionUseCase: CreateSocketConnectionUseCase
  ) {}

  createConnection() {
    this.createSocketConnectionUseCase.execute();
  }
}
