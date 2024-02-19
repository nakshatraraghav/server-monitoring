import { createLogger, transports } from "winston";
import LokiTransport from "winston-loki";

function setupLogger() {
  const opts = {
    transports: [
      new LokiTransport({
        host: "http://192.168.137.221:3100"
      })
    ]
  }

  return createLogger(opts);
}

const logger = setupLogger();

export default logger;

