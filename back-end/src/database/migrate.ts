import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const betterSqlite = new Database("./src/database/database.db");
const db = drizzle(betterSqlite);

console.log(betterSqlite);

migrate(db, { migrationsFolder: "./src/database/migrations" });

betterSqlite.close();
