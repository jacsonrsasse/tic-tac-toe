import { env } from '@config/env';
import { Injectable } from '@nestjs/common';
import { RedisClientType, createClient } from 'redis';

@Injectable()
export class RedisClientAdapter {
  private client: RedisClientType;

  constructor() {
    this.client = createClient({
      url: env.REDIS_URL,
      database: env.REDIS_DATABASE,
    });

    this.client.connect().then().catch(console.error);
  }

  getClient() {
    return this.client;
  }

  async getAllAsJson<T>(keyPrefix: string): Promise<T[] | void> {
    const keysData = await this.getClient().keys(keyPrefix);

    if (!keysData) return;

    const promiseResult = await Promise.allSettled(
      keysData.map((key) => this.getAsJson<T>(key)),
    );
    return promiseResult.flatMap((result) =>
      result.status === 'fulfilled' ? (result.value as T) : [],
    );
  }

  async getAsJson<T>(key: string): Promise<T | void> {
    const dataAsString = await this.getClient().get(key);

    if (!dataAsString) {
      return;
    }

    return JSON.parse(dataAsString);
  }

  async setJsonData<T>(key: string, data: T) {
    return this.getClient().set(key, JSON.stringify(data));
  }

  async delete(key: string) {
    return this.getClient().del(key);
  }
}
