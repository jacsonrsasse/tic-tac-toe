import { io, Socket } from "socket.io-client";

export default class WebSocketService {
  private socket!: Socket;

  connect() {
    if (this.socket) return;

    this.socket = io(
      import.meta.env.VITE_WEB_SOCKET_END_POINT || "ws://localhost:8080"
    );
    this.registerEvents();

    this.socket.emit("select_system", { system: "tic_tac_toe" });
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

  disconnect() {
    if (!this.socket) return;

    this.socket.disconnect();
  }
}
