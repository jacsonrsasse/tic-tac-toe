import { Container } from "inversify";
import { InversifyTypes } from "./types";

import { SocketIoAdapter } from "@modules/web-socket/adapters/socket-io.adapter";
import { BetterSqlite3Adapter } from "@shared/adapters/database-drivers/better-sqlite3.adapter";

let container: Container;

export default function inversifyRegister() {
  if (!container) {
    container = new Container({ autoBindInjectable: true });
    container
      .bind<SocketIoAdapter>(InversifyTypes.WebSocketAdapterInterface)
      .to(SocketIoAdapter);

    container
      .bind<BetterSqlite3Adapter>(InversifyTypes.DatabaseDriverInterface)
      .to(BetterSqlite3Adapter);
  }

  return container;
}
