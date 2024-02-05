import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const envSchema = z.object({
  DATABASE_URL: z.string(),
  REDIS_URL: z.string().url(),
  REDIS_DATABASE: z.coerce.number(),
  WEB_SOCKET_END_POINT: z.string().url(),
  SERVER_PORT: z.coerce.number(),
  JWT_SECRET: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error("Variaveis ambiente com erro");
}

export const env = parsed.data;
