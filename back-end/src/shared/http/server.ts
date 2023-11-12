import express, { Express, Router, Request, Response } from "express";
import WebSocketService from "../services/web-socket.service";
// import router from "../routes";

export default class Server {
  private app: Express;

  private players: any[];

  constructor() {
    this.app = express();

    // this.app.use(router);

    // this.app.use(express.json());

    this.app.listen(process.env.SERVER_PORT || 3333, () => {
      const service = new WebSocketService();
      service.connect();
      service.registerCustomEvent("player_connected", (socket) => {
        this.players.push(socket);
      });
    });
  }
}
