import { TicTacToeServerSocketEvents } from "@modules/web-socket/enums/tic-tac-toe-server-socket-events.enum";
import { Socket, io } from "socket.io-client";
import { Service } from "typedi";
import { SocketDefaultEvents } from "../enums/socket-default-events.enum";
import { TicTacToeClientSocketEvents } from "../enums/tic-tac-toe-client-socket-events.enum";
import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";
import { Observer } from "@shared/types/observer.type";

@Service()
export class SocketIoAdapter implements WebSocketAdapterInterface {
  private socket!: Socket;
  private observers: Observer[] = [];

  connect() {
    if (this.socket && this.socket.connected) return false;

    this.socket = io(
      process.env.WEB_SOCKET_END_POINT || "ws://localhost:8080/tic-tac-toe"
    );

    this.socket.on(SocketDefaultEvents.CONNECT, () => {
      this.socket.emit(TicTacToeServerSocketEvents.DEFINE_AS_SERVER);
      console.log(`Connected! ID ${this.socket.id}`);
    });

    this.socket.on(SocketDefaultEvents.CONNECT_ERROR, () =>
      console.log("Lost connection with Web Socket, retrying get connection!")
    );

    this.registerEvents();
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  private registerEvents() {
    this.socket.on(SocketDefaultEvents.ERROR, (reason) => {
      console.log("Error:", reason);
    });

    this.socket.on(TicTacToeClientSocketEvents.DEFINED_AS_SERVER, (data) => {
      this.observers.forEach((observer) =>
        observer(TicTacToeClientSocketEvents.DEFINED_AS_SERVER)
      );
    });
  }
}
