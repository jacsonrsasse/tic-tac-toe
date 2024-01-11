import { Container } from "inversify";
import { InversifyTypes } from ".";

import { DatabaseDriverInterface } from "@shared/adapters/interfaces/database-driver.interface";
import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";

import { SocketIoAdapter } from "@modules/web-socket/adapters/socket-io.adapter";
import { WebSocketConnectionBridge } from "@modules/web-socket/web-socket-connection.bridge";
import { BetterSqlite3Adapter } from "@shared/adapters/database-drivers/better-sqlite3.adapter";

const inversifyConfig = (() => {
  let container = new Container({ autoBindInjectable: true });

  const inversifyRegister = () => {
    container
      .bind<WebSocketAdapterInterface>(InversifyTypes.WebSocketAdapterInterface)
      .to(SocketIoAdapter);

    container
      .bind<DatabaseDriverInterface>(InversifyTypes.DatabaseDriverInterface)
      .to(BetterSqlite3Adapter);

    container
      .bind<WebSocketConnectionBridge>(WebSocketConnectionBridge)
      .toSelf()
      .inSingletonScope();
  };

  const getContainer = () => {
    return container;
  };

  inversifyRegister();

  return {
    getContainer,
  };
})();

export const getContainer = inversifyConfig.getContainer;
