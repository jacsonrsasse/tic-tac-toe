import { Container } from "inversify";
import { InversifyTypes } from ".";

// abstractions
import { DatabaseDriverInterface } from "@shared/adapters/interfaces/database-driver.interface";
import { WebSocketAdapterInterface } from "@shared/interfaces/web-socket-adapter.interface";
import { UserRepositoryInterface } from "@modules/users/repositories/interfaces/user-repository.interface";

// bindTo
import { SocketIoAdapter } from "@modules/web-socket/adapters/socket-io.adapter";
import { BetterSqlite3Adapter } from "@shared/adapters/database-drivers/better-sqlite3.adapter";
import { UserRepository } from "@modules/users/repositories/redis/user.respository";

// singletons
import { WebSocketConnectionBridge } from "@modules/web-socket/web-socket-connection.bridge";

const inversifyConfig = (() => {
  let container = new Container({ autoBindInjectable: true });

  const inversifyRegister = () => {
    container
      .bind<WebSocketAdapterInterface>(InversifyTypes.WEB_SOCKET_ADAPTER)
      .to(SocketIoAdapter);

    container
      .bind<DatabaseDriverInterface>(InversifyTypes.DATABASE_DRIVER)
      .to(BetterSqlite3Adapter);

    container
      .bind<UserRepositoryInterface>(InversifyTypes.USER_REPOSITORY)
      .to(UserRepository);

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
