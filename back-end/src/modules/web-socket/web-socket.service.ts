import { Inject, Service } from "typedi";
import { TicTacToeClientSocketEvents } from "./enums/tic-tac-toe-client-socket-events.enum";
import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";
import { SocketIoAdapter } from "@modules/web-socket/adapters/socket-io.adapter";
import { DI } from "@shared/enums/di.enum";
import { DrizzleClientService } from "@shared/services/drizzle-client.service";

@Service()
export default class WebSocketService {
  constructor(
    @Inject(DI.WEB_SOCKET_ADAPTER)
    private readonly webSocketAdapter: WebSocketAdapterInterface,
    @Inject()
    private readonly drizzleClientService: DrizzleClientService
  ) {
    this.webSocketAdapter.registerObserver(
      (event: TicTacToeClientSocketEvents) => {
        this.serverStatusHandler(event);
        this.drizzleClientService.getClient();
      }
    );
  }

  connect() {
    this.webSocketAdapter.connect();
  }

  private serverStatusHandler(event: TicTacToeClientSocketEvents) {
    if (event === TicTacToeClientSocketEvents.DEFINED_AS_SERVER) {
      return console.log("Server ready and listening!");
    }
    return console.log("Server down, please wait!");
  }
}
