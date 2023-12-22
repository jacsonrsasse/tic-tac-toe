import { Service } from "typedi";
import { DatabaseDriverInterface } from "../interfaces/database-driver.interface";
import * as schema from "@database/schema";
import { drizzle, BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import path from "path";

@Service()
export class BetterSqlite3Adapter implements DatabaseDriverInterface {
  connect(): BetterSQLite3Database<Record<string, never>> {
    const pathDB = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "/database",
      "database.db"
    );
    console.log(__dirname);
    const sqlite = new Database(pathDB, {
      fileMustExist: false,
    });
    const db = drizzle(sqlite);
    return db;
  }
}
