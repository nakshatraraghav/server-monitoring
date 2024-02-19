# Server Monitoring with Prometheus, Grafana, and Grafana Loki

## Monitoring Tools Used

- **Prometheus**: A powerful open-source monitoring and alerting toolkit designed for reliability, scalability, and maintainability.
- **Grafana**: An open-source analytics and monitoring platform that allows you to query, visualize, and alert on metrics and logs no matter where they are stored.
- **Grafana Loki**: A horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus.


## Installation

To get started with the Server Monitoring project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/nakshatraraghav/server-monitoring.git
```
2. Install Dependencies

```bash
pnpm install
```

3. Run docker-compose

```bash
sudo docker-compose up -d
```

4. Start the http server

```bash
pnpm dev
```
5. Stop the docker-compose and http server

```bash
sudo docker-compose down

```

## Access Grafana

Open your web browser and go to http://localhost:3000 (default Grafana URL).

Log in with the default credentials (admin/admin) or the credentials you configured.


## Configuration

- Prometheus Configuration: Modify prometheus.yml to add or modify scraping targets and configurations.
- Grafana Configuration: Configure data sources in Grafana to connect to Prometheus and Loki.

## Docker Compose

You can use the provided docker-compose.yml file to easily run Prometheus, Grafana, and Loki servers in Docker containers. This configuration ensures that all required services are orchestrated and can communicate with each other seamlessly.


