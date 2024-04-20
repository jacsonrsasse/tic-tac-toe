import { ContainerModule, interfaces } from "inversify";
import { DatabaseDriverInterface } from "./adapters/interfaces/database-driver.interface";
import { BetterSqlite3Adapter } from "./adapters/database-drivers/better-sqlite3.adapter";

const sharedSymbols = {
  DATABASE_DRIVER: Symbol.for("DatabaseDriverInterface"),
};

const autoBind = {};

const sharedModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<DatabaseDriverInterface>(sharedSymbols.DATABASE_DRIVER).to(
    BetterSqlite3Adapter
  );
});

export { sharedModule, sharedSymbols };
