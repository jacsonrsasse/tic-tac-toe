import routes from "./routes";
import express, { Express } from "express";
import { WebSocketHandler } from "@modules/web-socket/web-socket.handler";
import { Container } from "inversify";
import getContainer from "src/config/inversify/di-register";

export default class Server {
  private app: Express;

  private container: Container;

  constructor() {
    this.inversifyContainerStart();

    this.appStart();
  }

  private inversifyContainerStart() {
    this.container = getContainer();
  }

  private appStart() {
    this.app = express();

    this.app.set("trust proxy", true);
    this.app.use(express.json());

    this.app.use(routes);

    this.app.listen(process.env.SERVER_PORT || 3000, () => {
      this.webSocketStart();
    });
  }

  private webSocketStart() {
    const webSocketHandler = this.container.resolve(WebSocketHandler);

    webSocketHandler.createConnection();
  }
}
