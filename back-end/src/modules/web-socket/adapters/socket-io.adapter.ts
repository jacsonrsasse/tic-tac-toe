import { TicTacToeServerSocketEvents } from "@modules/web-socket/enums/tic-tac-toe-server-socket-events.enum";
import { Socket, io } from "socket.io-client";
import { Service } from "typedi";

@Service()
export class SocketIoAdapter {
  private socket!: Socket;

  connect() {
    if (this.socket && this.socket.connected) return false;

    this.socket = io(
      process.env.WEB_SOCKET_END_POINT || "ws://localhost:8080/tic-tac-toe"
    );

    this.socket.on("connect", () => {
      this.socket.emit(TicTacToeServerSocketEvents.DEFINE_AS_SERVER);
      console.log("connected!");
    });

    this.socket.on("connect_error", () =>
      console.log("Lost connection with Web Socket, retrying get connection!")
    );

    this.registerEvents();
  }

  private registerEvents() {
    this.socket.on("error", (reason) => {
      console.log("Error:", reason);
    });

    this.socket.on("connected", (data) => {
      if (data.success) {
        console.log(`Connected! ID ${this.socket.id}`);
      }
    });
  }
}
