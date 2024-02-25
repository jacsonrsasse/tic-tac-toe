import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";
import { WebSocketConnectionBridge } from "./web-socket-connection.bridge";
import { inject, injectable } from "inversify";
import { webSocketSymbols } from "./web-socket.inversify";

@injectable()
export class WebSocketService {
  constructor(
    @inject(webSocketSymbols.WEB_SOCKET_ADAPTER)
    private readonly webSocketAdapter: WebSocketAdapterInterface,
    @inject(WebSocketConnectionBridge)
    private readonly webSocketConnectionBridge: WebSocketConnectionBridge
  ) {
    this.webSocketAdapter
      .socketStatus$()
      .subscribe((socketStatus: boolean) =>
        this.webSocketConnectionBridge.socketStatusHandler(socketStatus)
      );
  }

  connect() {
    this.webSocketAdapter.connect();
  }
}
