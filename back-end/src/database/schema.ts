import { createId } from "@paralleldrive/cuid2";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id", { length: 128 })
    .primaryKey()
    .$defaultFn(() => createId()),
  nickname: text("nickname", { length: 50 }).notNull(),
  connectionId: text("connection_id", { length: 150 }).unique(),
  ipAddress: text("ip_address", { length: 16 }),
});
