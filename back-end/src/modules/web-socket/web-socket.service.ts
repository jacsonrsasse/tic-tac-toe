import { Inject, Service } from "typedi";
import { TicTacToeClientSocketEvents } from "./enums/tic-tac-toe-client-socket-events.enum";
import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";

@Service()
export default class WebSocketService {
  constructor(
    @Inject("SOCKET_IO_ADAPTER")
    private readonly webSocketAdapter: WebSocketAdapterInterface
  ) {
    this.webSocketAdapter.addObserver &&
      this.webSocketAdapter.addObserver(this.serverStatusHandler);
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
