import express from "express";
import { WebSocketHandler } from "@modules/web-socket/web-socket.handler";
import { Container } from "inversify";
import { getContainer } from "@config/inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import isConnectableMiddleware from "@shared/middlewares/is-connectable.middleware";
import { env } from "@config/env";
import cookieParser from "cookie-parser";
import cors from "cors";

export default class Server {
  private container: Container;

  constructor() {
    this.inversifyContainerStart();
    this.appStart();
  }

  private inversifyContainerStart() {
    this.container = getContainer();
  }

  private appStart() {
    const server: InversifyExpressServer = new InversifyExpressServer(
      this.container
    );

    server.setConfig((app) => {
      app.use(
        cors({
          credentials: true,
        })
      );

      app.use(express.json());

      app.use(cookieParser());

      app.use(isConnectableMiddleware);
    });

    const app = server.build();
    app.listen(env.SERVER_PORT || 3000, () => {
      this.webSocketStart();
    });
  }

  private webSocketStart() {
    const webSocketHandler = this.container.resolve(WebSocketHandler);

    webSocketHandler.createConnection();
  }
}
