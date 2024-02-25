import { WebSocketService } from "../web-socket.service";
import { inject, injectable } from "inversify";

@injectable()
export class CreateSocketConnectionUseCase {
  constructor(
    @inject(WebSocketService)
    private readonly webSocketService: WebSocketService
  ) {}

  execute() {
    this.webSocketService.connect();
  }
}
