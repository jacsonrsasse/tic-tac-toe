import { Inject, Service } from "typedi";
import { DI } from "@shared/enums/di.enum";
import { DatabaseDriverInterface } from "@shared/adapters/interfaces/database-driver.interface";
import { dbClient } from "@shared/adapters/database-drivers/better-sqlite3.adapter";

@Service()
export class DrizzleClientService {
  constructor(
    @Inject(DI.DRIZZLE_DATABASE_DRIVER_ADAPTER)
    private readonly databaseDriverAdapter: DatabaseDriverInterface
  ) {}

  getClient(): dbClient {
    return this.databaseDriverAdapter.client();
  }
}
