import { Service } from "typedi";
import { DatabaseDriverInterface } from "../interfaces/database-driver.interface";
import * as schema from "@database/schema";
import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database, { Database as DatabaseType } from "better-sqlite3";
import path from "path";

type dbClient = BetterSQLite3Database<Record<string, never>>;

@Service()
export class BetterSqlite3Adapter implements DatabaseDriverInterface {
  private pathDB = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "/database",
    "database.db"
  );

  private sqlite: DatabaseType;
  private db: dbClient;

  connect() {
    this.sqlite = new Database(this.pathDB, {
      fileMustExist: false,
    });
    this.db = drizzle(this.sqlite);
  }

  disconnect() {
    this.sqlite && this.sqlite.close();
  }

  client(): dbClient {
    if (!this.db) {
      this.connect();
    }

    return this.db;
  }
}
