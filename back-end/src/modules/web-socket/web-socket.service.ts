import { Socket, io } from "socket.io-client";
import { Inject, Service } from "typedi";
import { TicTacToeServerSocketEvents } from "@modules/web-socket/enums/tic-tac-toe-server-socket-events.enum";
import { SocketIoAdapter } from "./adapters/socket-io.adapter";

@Service()
export default class WebSocketService {
  constructor(@Inject() private readonly webSocketAdapter: SocketIoAdapter) {}

  connect() {
    this.webSocketAdapter.connect();
  }
}
