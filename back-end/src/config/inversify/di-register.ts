import { Container } from "inversify";
import { InversifyTypes } from "./types";

import { SocketIoAdapter } from "@modules/web-socket/adapters/socket-io.adapter";
import { BetterSqlite3Adapter } from "@shared/adapters/database-drivers/better-sqlite3.adapter";

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
export default getContainer;
