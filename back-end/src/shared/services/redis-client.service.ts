import { env } from "@config/env";
import { injectable } from "inversify";
import { RedisClientType, createClient } from "redis";

@injectable()
export class RedisClientService {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: env.REDIS_URL,
      database: env.REDIS_DATABASE,
    });

    this.client.connect();
  }

  async getAsJson<T>(key: string): Promise<T | void> {
    const dataAsString = await this.client.get(key);

    if (!dataAsString) {
      return;
    }

    return JSON.parse(dataAsString);
  }

  async setJsonData<T>(key: string, data: T) {
    return this.client.set(key, JSON.stringify(data));
  }
}
