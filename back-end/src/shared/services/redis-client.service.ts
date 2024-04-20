import { env } from "@config/env";
import { injectable } from "inversify";
import { RedisClientType, createClient } from "redis";
import { promise } from "zod";

@injectable()
export class RedisClientService {
  private client: RedisClientType;

  async getClient() {
    if (!this.client) {
      this.client = createClient({
        url: env.REDIS_URL,
        database: env.REDIS_DATABASE,
      });

      await this.client.connect();
    }

    return this.client;
  }

  async getAllAsJson<T>(keyPrefix: string): Promise<T[] | void> {
    const client = await this.getClient();
    const keysData = await client.keys(keyPrefix);

    if (!keysData) return;

    const promiseResult = await Promise.allSettled(
      keysData.map((key) => this.getAsJson<T>(key))
    );
    return promiseResult.flatMap((result) =>
      result.status === "fulfilled" ? (result.value as T) : []
    );
  }

  async getAsJson<T>(key: string): Promise<T | void> {
    const client = await this.getClient();
    const dataAsString = await client.get(key);

    if (!dataAsString) {
      return;
    }

    return JSON.parse(dataAsString);
  }

  async setJsonData<T>(key: string, data: T) {
    const client = await this.getClient();
    return client.set(key, JSON.stringify(data));
  }

  async delete(key: string) {
    const client = await this.getClient();
    return client.del(key);
  }
}
