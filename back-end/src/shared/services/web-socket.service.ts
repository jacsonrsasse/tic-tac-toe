import { Socket, io } from "socket.io-client";
import WebSocketInterface from "../interfaces/services/web-socket.interface";

export default class WebSocketService implements WebSocketInterface {
  private socket!: Socket;

  connect() {
    if (this.socket) return;

    this.socket = io(process.env.WEB_SOCKET_END_POINT || "ws://localhost:8080");
    this.registerEvents();

    this.socket.emit("select_system", { system: "tic_tac_toe" });
    this.socket.emit("define_as_server", true);
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

  public registerCustomEvent(eventName: string, fn: (event?: any) => void) {
    this.socket.on(eventName, fn);
  }
}
