import { DatabaseDriverInterface } from "../interfaces/database-driver.interface";
import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database, { Database as DatabaseType } from "better-sqlite3";
import { injectable } from "inversify";

export type dbClient = BetterSQLite3Database<Record<string, never>>;

@injectable()
export class BetterSqlite3Adapter implements DatabaseDriverInterface {
  private pathDB = process.env.DATABASE_URL || "./db/database.db";

  private sqlite: DatabaseType;
  private db: dbClient;

  connect() {
    this.sqlite = new Database(this.pathDB, {
      fileMustExist: true,
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
