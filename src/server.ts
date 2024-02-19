import express from "express";

import { env } from "./lib/zenv";
import logger from "./lib/logger";

const app = express();

app.listen(env.PORT, () => {
  logger.info(`server started on localhost:${env.PORT}`)
});
