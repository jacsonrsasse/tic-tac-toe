import { SocketIoAdapter } from "@modules/web-socket/adapters/socket-io.adapter";
import { BetterSqlite3Adapter } from "@shared/adapters/database-drivers/better-sqlite3.adapter";
import { DI } from "@shared/enums/di.enum";
import Container from "typedi";

export const registerDependencies = () => {
  Container.set([{ id: DI.WEB_SOCKET_ADAPTER, value: new SocketIoAdapter() }]);
  Container.set([
    {
      id: DI.DRIZZLE_DATABASE_DRIVER_ADAPTER,
      value: new BetterSqlite3Adapter(),
    },
  ]);
};
