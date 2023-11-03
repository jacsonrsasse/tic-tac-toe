import WebSocketInterface from "../../../shared/interfaces/services/web-socket.interface";
import UseCaseInterface from "../../../shared/interfaces/use-cases/use-case.interface";

export default class PlayerConnectUseCase implements UseCaseInterface {
  constructor(private webSocketService: WebSocketInterface) {}

  execute() {
    return this.webSocketService.connect();
  }
}
