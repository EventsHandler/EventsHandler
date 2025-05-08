# Events Handler

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version 23 or later (includes Corepack for `pnpm`)
- [Docker](https://www.docker.com/) and Docker Compose

### Setup and Running the Application

1.  **Start the database:**
    Open a terminal and run the following command from the project root directory:

    ```bash
    docker compose -f docker-compose.dev.yaml up -d
    ```

2.  **Install dependencies:**
    `pnpm` is automatically available via Corepack in Node.js v23+. Run:

    ```bash
    pnpm install
    ```

3.  **Start the development servers:**
    This command will start the backend server, the frontend client, and the GraphQL code generator in watch mode.
    ```bash
    pnpm dev
    ```

The application should now be running.

## Production Deployment

This section describes how to deploy the application using Docker for a production environment.

### Prerequisites

- Docker and Docker Compose installed.
- External Docker networks `public` and `proxy` must be created:
  ```bash
  docker network create public
  docker network create proxy
  ```
  The `public` network is intended for services needing outbound internet access (like the backend server). The `proxy` network is for connecting an external reverse proxy (like Nginx Proxy Manager) to the client service.
- Ensure you have a `pnpm-workspace.yaml` file in the project root:
  ```yaml
  # pnpm-workspace.yaml
  packages:
    - 'packages/*'
  ```

### Environment Variables

Before deploying, configure the necessary environment variables in `docker-compose.prod.yaml`:

- Update database credentials (`POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`) for the `db` service and ensure the `DATABASE_URL` in the `server` service matches. **Use strong, unique passwords for production.**
- Set any other required environment variables for the `server` service (e.g., `JWT_SECRET`, `OPENAI_API_KEY`).

### Building and Running

1.  **Build and start the services:**
    From the project root directory, run:

    ```bash
    docker compose -f docker-compose.prod.yaml up --build -d
    ```

    This command will build the Docker images for the `server` and `client` if they don't exist or if their Dockerfiles have changed, and then start all services in detached mode.

2.  **Accessing the Application:**
    - The `client` service (Nginx) will be accessible on the `proxy` network. You should configure your Nginx Proxy Manager (or other reverse proxy) to forward traffic from your desired public domain/IP to the `client` service (e.g., `http://client:80` if your services are on the same Docker host and `proxy` network).
    - The `server` service is not directly exposed to the internet. The `client` service proxies `/graphql` requests to it over the internal `events-handler-net` network.
    - The `db` service is only accessible on the `events-handler-net` network by the `server` service.

### Managing the Deployment

- **View logs:**

  ```bash
  docker compose -f docker-compose.prod.yaml logs -f
  docker compose -f docker-compose.prod.yaml logs -f <service_name> # e.g., server, client, db
  ```

- **Stop services:**

  ```bash
  docker compose -f docker-compose.prod.yaml down
  ```

- **Stop and remove volumes (e.g., to clear database data - use with caution!):**
  ```bash
  docker compose -f docker-compose.prod.yaml down -v
  ```

### Notes

- The `Dockerfile.prod` for both server and client use multi-stage builds to keep production images small and secure.
- The server's `APP_PORT` is set to `4000` by default. If your server application listens on a different port, update this in `docker-compose.prod.yaml` and `packages/client/nginx.conf`.
- Ensure that the `public` network provides necessary internet access if your server needs to call external APIs (like OpenAI).
