import { TicTacToeServerSocketEvents } from "@modules/web-socket/enums/tic-tac-toe-server-socket-events.enum";
import { Socket, io } from "socket.io-client";
import { Service } from "typedi";
import { SocketDefaultEvents } from "../enums/socket-default-events.enum";
import { TicTacToeClientSocketEvents } from "../enums/tic-tac-toe-client-socket-events.enum";
import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Service("SOCKET_IO_ADAPTER")
export class SocketIoAdapter implements WebSocketAdapterInterface {
  private socket!: Socket;
  private isConnected = false;
  private _socketStatus = new BehaviorSubject(false);

  connect() {
    if (this.socket && this.socket.connected) return false;

    this.socket = io(
      process.env.WEB_SOCKET_END_POINT || "ws://localhost:8080/tic-tac-toe"
    );

    this.socket.on(SocketDefaultEvents.CONNECT, () => {
      this.socket.emit(TicTacToeServerSocketEvents.DEFINE_AS_SERVER);
      console.log(`Connected! ID ${this.socket.id}`);
    });

    this.socket.on(SocketDefaultEvents.CONNECT_ERROR, () => {
      if (this.isConnected) {
        this.isConnected = false;
        this._socketStatus.next(false);
      }
      console.log("Lost connection with Web Socket, retrying get connection!");
    });

    this.registerEvents();
  }

  socketStatus$(): Observable<boolean> {
    return this._socketStatus.asObservable();
  }

  private registerEvents() {
    this.socket.on(SocketDefaultEvents.ERROR, (reason) => {
      console.log("Error:", reason);
    });

    this.socket.on(TicTacToeClientSocketEvents.DEFINED_AS_SERVER, (data) => {
      this.isConnected = true;
      this._socketStatus.next(true);
    });
  }
}
