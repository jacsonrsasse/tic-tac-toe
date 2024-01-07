import { Container } from "inversify";

import { SocketIoAdapter } from "@modules/web-socket/adapters/socket-io.adapter";
import { BetterSqlite3Adapter } from "@shared/adapters/database-drivers/better-sqlite3.adapter";

const InversifyTypes = {
  WebSocketAdapterInterface: Symbol.for("WebSocketAdapterInterface"),
  DatabaseDriverInterface: Symbol.for("DatabaseDriverInterface"),
};

const inversifyConfig = (() => {
  let container = new Container({ autoBindInjectable: true });

  const inversifyRegister = () => {
    container
      .bind<SocketIoAdapter>(InversifyTypes.WebSocketAdapterInterface)
      .to(SocketIoAdapter);

    container
      .bind<BetterSqlite3Adapter>(InversifyTypes.DatabaseDriverInterface)
      .to(BetterSqlite3Adapter);
  };

  const getContainer = () => {
    return container;
  };

  inversifyRegister();

  return {
    getContainer,
  };
})();

const getContainer = inversifyConfig.getContainer;

export { getContainer, InversifyTypes };