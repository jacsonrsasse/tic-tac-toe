import { Socket, io } from "socket.io-client";
import { Inject, Service } from "typedi";
import { TicTacToeServerSocketEvents } from "@modules/web-socket/enums/tic-tac-toe-server-socket-events.enum";
import { SocketIoAdapter } from "./adapters/socket-io.adapter";
import { Observer } from "@shared/types/observer.type";
import { TicTacToeClientSocketEvents } from "./enums/tic-tac-toe-client-socket-events.enum";

@Service()
export default class WebSocketService {
  constructor(@Inject() private readonly webSocketAdapter: SocketIoAdapter) {
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
