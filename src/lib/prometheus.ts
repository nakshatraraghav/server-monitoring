import prometheus from "prom-client";

export function metrics() {
  const collectDefaultMetrics = prometheus.collectDefaultMetrics;

  collectDefaultMetrics({
    register: prometheus.register
  })

}

