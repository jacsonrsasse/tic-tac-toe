import { WebSocketConnectionBridge } from "@modules/web-socket/web-socket-connection.bridge";
import { NextFunction, Request, Response } from "express";
import Container from "typedi";

const isConnectableMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const webSocketConnectionBridge = Container.get(WebSocketConnectionBridge);

  if (!webSocketConnectionBridge.isConnected) {
    return response.status(500).json({ message: "Internal server error" });
  }

  return next();
};

export default isConnectableMiddleware;
