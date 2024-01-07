import { WebSocketService } from "../web-socket.service";
import { injectable } from "inversify";

@injectable()
export class CreateSocketConnectionUseCase {
  constructor(private readonly webSocketService: WebSocketService) {}

  execute() {
    this.webSocketService.connect();
  }
}
