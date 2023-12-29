import { WebSocketConnectionBridge } from "@modules/web-socket/web-socket-connection.bridge";
import { NextFunction, Request, Response } from "express";
import Container from "typedi";

export default function isConnectableMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const webSocketConnectionBridge = Container.get(WebSocketConnectionBridge);

  if (!webSocketConnectionBridge.isConnected) {
    response.status(500).json({ message: "Internal server error" });
    return;
  }

  next();
}
