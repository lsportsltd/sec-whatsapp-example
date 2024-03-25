import fastify from "fastify";
import router from "./router";
import fastifyEnv from "@fastify/env";
import { envOptions } from "./config";

const server = fastify({
  // Logger only for production
  logger: !!(process.env.NODE_ENV !== "development"),
});

// Middleware: Router
server.register(router).register(fastifyEnv, envOptions);

export default server;
