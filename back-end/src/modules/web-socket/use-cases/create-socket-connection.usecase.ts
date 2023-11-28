import { Inject, Service } from "typedi";
import WebSocketService from "../web-socket.service";

@Service()
export class CreateSocketConnection {
  constructor(@Inject() private readonly webSocketService: WebSocketService) {}

  execute() {
    this.webSocketService.connect();
  }
}
