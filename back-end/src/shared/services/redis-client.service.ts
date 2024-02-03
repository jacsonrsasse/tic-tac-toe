import { env } from "@config/env";
import { injectable } from "inversify";
import { createClient } from "redis";

@injectable()
export class RedisClientService {
  private client: any;

  constructor() {
    this.client = createClient({
      url: env.REDIS_URL,
      database: env.REDIS_DATABASE,
    });
  }
}
