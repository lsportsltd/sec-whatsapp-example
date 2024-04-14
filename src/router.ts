import { FastifyInstance } from "fastify";
import indexController from "./controller/indexController";
import messageController from "./controller/messageController";

export default async function router(fastify: FastifyInstance) {
  fastify.register(messageController, { prefix: "/api/v1/message" });
  fastify.register(indexController, { prefix: "/" });
}
