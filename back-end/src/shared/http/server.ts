import express, { Express, Router, Request, Response } from "express";
import WebSocketService from "../../modules/web-socket/web-socket.service";
import { Inject, Service } from "typedi";
// import router from "../routes";

@Service()
export default class Server {
  private app: Express;

  private players: any[];

  constructor(@Inject() private readonly webSocketService: WebSocketService) {
    this.app = express();

    this.app.listen(process.env.SERVER_PORT || 3333, () => {
      this.webSocketService.connect();
    });
  }
}
