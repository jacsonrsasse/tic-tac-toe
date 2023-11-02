import express, { Express } from "express";
import router from "../routes";

export default class Server {
  private app: Express;

  constructor() {
    this.app = express();

    this.app.use(router);

    this.app.listen(3333, () => {
      console.log("Running");
    });
  }
}
