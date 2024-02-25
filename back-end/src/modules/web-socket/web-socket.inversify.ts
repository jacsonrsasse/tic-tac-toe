import { ContainerModule, interfaces } from "inversify";
import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";
import { SocketIoAdapter } from "./adapters/socket-io.adapter";
import { WebSocketConnectionBridge } from "./web-socket-connection.bridge";

const webSocketSymbols = {
  WEB_SOCKET_ADAPTER: Symbol.for("WebSocketAdapterInterface"),
};

const autoBind = {};

const webSocketModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<WebSocketAdapterInterface>(webSocketSymbols.WEB_SOCKET_ADAPTER).to(
    SocketIoAdapter
  );

  bind<WebSocketConnectionBridge>(WebSocketConnectionBridge)
    .toSelf()
    .inSingletonScope();
});

export { webSocketModule, webSocketSymbols };
