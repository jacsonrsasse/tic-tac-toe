import { Inject, Service } from "typedi";
import WebSocketService from "../web-socket.service";

@Service()
export class CreateSocketConnectionUseCase {
  constructor(@Inject() private readonly webSocketService: WebSocketService) {}

  execute() {
    this.webSocketService.connect();
  }
}
