import {
  sqliteTable,
  integer,
  uniqueIndex,
  text,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nickname: text("nickname", { length: 50 }).notNull(),
  connectionId: text("connection_id", { length: 150 }).unique(),
  ipAddress: text("ip_address", { length: 16 }),
});
