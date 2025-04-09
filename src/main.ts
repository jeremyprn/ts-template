import "reflect-metadata";
import { autoInjectable, container } from "tsyringe";
import { CustomLogger } from "./services/logger.service.js";

@autoInjectable()
export class Main {
  constructor(
    private logger: CustomLogger,
  ) {
    this.logger?.log(`Starting app...`);
  }

  public async start() {
    this.logger?.log(`App started!`);
  }
}

const app = container
  .register<Main>("app", Main)
  .resolve<Main>("app");

  app.start();
