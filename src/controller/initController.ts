import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { updateState } from "../state";
import { getRandomFixtures } from "../messaging/messageHandler";

export default async function initController(fastify: FastifyInstance) {
  // GET /api/v1/init
  fastify.get(
    "/",
    async function (_request: FastifyRequest, reply: FastifyReply) {
      const randomFixtures = await getRandomFixtures();
      updateState({ randomFixtures: randomFixtures.fixtures });
      console.log(randomFixtures.fixtures);
      reply.send(randomFixtures.fixtures);
    }
  );
}
