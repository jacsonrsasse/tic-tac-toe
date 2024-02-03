import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";
import { WebSocketConnectionBridge } from "./web-socket-connection.bridge";
import { inject, injectable } from "inversify";
import { InversifyTypes } from "@config/inversify";

@injectable()
export class WebSocketService {
  constructor(
    @inject(InversifyTypes.WEB_SOCKET_ADAPTER)
    private readonly webSocketAdapter: WebSocketAdapterInterface,
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
