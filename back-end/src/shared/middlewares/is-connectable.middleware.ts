import { WebSocketConnectionBridge } from "@modules/web-socket/web-socket-connection.bridge";
import { NextFunction, Request, Response } from "express";
import { getContainer } from "@config/inversify";

const isConnectableMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const webSocketConnectionBridge = getContainer().get(
    WebSocketConnectionBridge
  );

  if (!webSocketConnectionBridge.isConnected) {
    return response.status(503).json({ message: "Service Unavailable" });
  }

  return next();
};

export default isConnectableMiddleware;
