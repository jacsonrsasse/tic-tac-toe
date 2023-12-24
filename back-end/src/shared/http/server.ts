import express, { Express, Router, Request, Response } from "express";
import { Inject, Service } from "typedi";
import { WebSocketController } from "@modules/web-socket/web-socket.controller";
// import router from "../routes";

@Service()
export default class Server {
  private app: Express;

  private players: any[];

  constructor(
    @Inject() private readonly webSocketController: WebSocketController
  ) {
    this.app = express();

    this.app.listen(process.env.SERVER_PORT || 3333, () => {
      this.webSocketController.createConnection();
    });
  }
}
