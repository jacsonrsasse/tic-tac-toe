import express, { Express, Router, Request, Response } from "express";
import { Inject, Service } from "typedi";
import { WebSocketController } from "@modules/web-socket/web-socket.controller";
import routes from "./routes";
// import router from "../routes";

@Service()
export default class Server {
  private app: Express;

  private players: any[];

  constructor(
    @Inject() private readonly webSocketController: WebSocketController
  ) {
    this.app = express();

    this.app.set("trust proxy", true);
    this.app.use(express.json());

    this.app.use(routes);

    this.app.listen(process.env.SERVER_PORT || 3000, () => {
      this.webSocketController.createConnection();
    });
  }
}
