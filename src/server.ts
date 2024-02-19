import express from "express";

import { env } from "./lib/zenv";
import logger from "./lib/logger";
import { metrics } from "./lib/prometheus";

import { router } from "./router";

const app = express();

metrics();

router(app);

app.listen(env.PORT, () => {
  logger.info(`server started on localhost:${env.PORT}`)
});
