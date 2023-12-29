import { Inject, Service } from "typedi";
import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";
import { DI } from "@shared/enums/di.enum";
import { DrizzleClientService } from "@shared/services/drizzle-client.service";
import { BehaviorSubject } from "rxjs";
import { WebSocketConnectionBridge } from "./web-socket-connection.bridge";

@Service()
export default class WebSocketService {
  constructor(
    @Inject(DI.WEB_SOCKET_ADAPTER)
    private readonly webSocketAdapter: WebSocketAdapterInterface,
    @Inject()
    private readonly drizzleClientService: DrizzleClientService,
    @Inject()
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
