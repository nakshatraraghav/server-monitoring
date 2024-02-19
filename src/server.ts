import express from "express";

import { env } from "./lib/zenv";
import logger from "./lib/logger";

import { router } from "./router";

const app = express();

router(app);

app.listen(env.PORT, () => {
  logger.info(`server started on localhost:${env.PORT}`)
});
