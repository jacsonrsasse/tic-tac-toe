import { Inject, Service } from "typedi";
import * as schema from "@database/schema";
import { DI } from "@shared/enums/di.enum";
import { DatabaseDriverInterface } from "@shared/adapters/interfaces/database-driver.interface";

@Service()
export class DrizzleClientService {
  private client: any;

  constructor(
    @Inject(DI.DRIZZLE_DATABASE_DRIVER_ADAPTER)
    private readonly databaseDriverAdapter: DatabaseDriverInterface
  ) {}

  getClient() {
    if (!this.client) {
      this.client = this.databaseDriverAdapter.connect();
    }
    return this.client;
  }
}
