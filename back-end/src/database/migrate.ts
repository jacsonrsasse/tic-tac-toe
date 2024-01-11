import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
import process from "process";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL as string;

const betterSqlite = new Database(databaseUrl);
const db = drizzle(betterSqlite);

migrate(db, { migrationsFolder: "./src/database/migrations" });

betterSqlite.close();
