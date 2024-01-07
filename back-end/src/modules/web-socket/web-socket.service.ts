import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";
import { WebSocketConnectionBridge } from "./web-socket-connection.bridge";
import { inject, injectable } from "inversify";
import { InversifyTypes } from "src/config/inversify/types";

@injectable()
export class WebSocketService {
  constructor(
    @inject(InversifyTypes.WebSocketAdapterInterface)
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
