import { FastifyInstance } from "fastify";
import initController from "./controller/initController";
import indexController from "./controller/indexController";

export default async function router(fastify: FastifyInstance) {
  fastify.register(initController, { prefix: "/api/v1/init" });
  fastify.register(indexController, { prefix: "/" });
}
