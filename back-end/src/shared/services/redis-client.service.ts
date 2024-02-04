import { env } from "@config/env";
import { injectable } from "inversify";
import { RedisClientType, createClient } from "redis";
import { promise } from "zod";

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

  async getAllAsJson<T>(keyPrefix: string): Promise<T[] | void> {
    const keysData = await this.client.keys(keyPrefix);

    if (!keysData) return;

    const promiseResult = await Promise.allSettled(
      keysData.map((key) => this.getAsJson<T>(key))
    );
    return promiseResult.flatMap((result) =>
      result.status === "fulfilled" ? (result.value as T) : []
    );
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

  async delete(key: string) {
    return this.client.del(key);
  }
}
