import { config } from "dotenv";
import { z } from "zod";

import logger from "./logger";

config();

const schema = z.object({
  PORT: z.string()
})

function zenv() {
  try {
    const env = schema.parse(process.env);
    logger.info("environment variables parsed successfully");
    return env;
  } catch (error) {
    logger.error("failed to parse the environment variables");
    process.exit(1);
  }
}

export const env = zenv();

