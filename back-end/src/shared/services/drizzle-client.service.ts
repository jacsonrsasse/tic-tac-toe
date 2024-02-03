import { inject, injectable } from "inversify";
import { DatabaseDriverInterface } from "@shared/adapters/interfaces/database-driver.interface";
import { dbClient } from "@shared/adapters/database-drivers/better-sqlite3.adapter";
import { InversifyTypes } from "@config/inversify";

@injectable()
export class DrizzleClientService {
  constructor(
    @inject(InversifyTypes.DATABASE_DRIVER)
    private readonly databaseDriverAdapter: DatabaseDriverInterface
  ) {}

  getClient(): dbClient {
    return this.databaseDriverAdapter.client();
  }
}
