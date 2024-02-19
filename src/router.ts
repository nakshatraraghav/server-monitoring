import { Express } from "express";
import type { Request, Response } from "express";
import logger from "./lib/logger";
import { slowFunction } from "./lib/slow-function";

export function router(app: Express) {
  app.get("/healthcheck", (request: Request, response: Response) => {
    return response.send("OK")
  });

  app.get("/fast", (request: Request, response: Response) => {

    return response.send("fast response from /fast route");
  });

  app.get("/slow", async (request: Request, response: Response) => {
    try {
      const ms = await slowFunction();

      return response.json({
        status: "success",
        message: `slow task completed in ${ms} ms`
      })
    } catch (error) {
      logger.error(`request failed: ${request.method} on ${request.url}`);
      return response.send("internal server error");
    }
  })
}
